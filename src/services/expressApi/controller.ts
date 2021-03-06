import { RequestHandler } from 'express';
import { UserInputError } from 'apollo-server';

import * as TYPES from 'types';
import * as Models from 'src/resolvers/models';
import * as lib from 'src/middleware/validations/lib';
import ENV from 'config/env';

type TControllers = {
  [ctlName: string]: RequestHandler;
};

const Controllers: TControllers = {
  emailVerification: async (req, res, next) => {
    const { userId, hash } = req.params;
    if (!hash || !userId) res.status(400).json({ msg: 'error: params missing.' });
    try {
      await validateParams(userId, hash);
      const user = await Models.User.findByIdAndUpdate(userId, {
        verified: true,
        role: TYPES.Role.REGULAR,
      });
      if (user?.verified) {
        await Models.EmailVerification.findOneAndRemove({ userId }, null, (error, docs) => {
          if (error) res.status(500).json({ test: 2, error });
          res.redirect(`${ENV.clientHostname}/?verified=true`);
        });
      }
    } catch (error) {
      res.status(500).json({ test: 3, error });
    }
    next();
  },
};

const validateParams = async (userId: string, hash: string): Promise<void> => {
  try {
    lib.validateID(userId);
    const user = await Models.User.findById(userId, null, { lean: true });
    lib.validateItem(user, 'User', 'userId', 'User not found!');
    const emailVerification = <TYPES.EmailVerification>(
      await Models.EmailVerification.findOne({ userId }).lean()
    );
    lib.validateItem(
      emailVerification,
      'Email Verification',
      'userId',
      'Email verification not found, ask new one from your profile.'
    );
    if (hash !== emailVerification.hash) throw new UserInputError('Wrong token!');
    lib.validateToken({
      payload: { userId },
      payloadArgs: ['userId'],
      token: hash,
      secretCode: ENV.secretCode2,
    });
  } catch (error) {
    throw new UserInputError('Wrong token!', error);
  }
};

export default Controllers;
