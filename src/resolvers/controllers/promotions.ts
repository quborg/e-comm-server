import * as TYPES from 'types';

import { Promotion } from '../models';

const promotions: { Query: TYPES.Query; Mutation: TYPES.Mutation } = {
  Query: {
    getPromotion: async (_, _id) => {
      try {
        const promotion = await Promotion.findById(_id);
        return promotion;
      } catch (err) {
        throw new Error(err);
      }
    },
    getPromotions: async (_, { args }) => {
      try {
        let promotions: TYPES.Maybe<TYPES.Promotion[]>;
        if (!args?.keyword) {
          promotions = await Promotion.find().skip(args?.start).limit(args?.limit).lean();
        } else {
          const query = args.keyword.toString();
          promotions = await Promotion.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        }
        return promotions;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    editPromotion: async (_, { inputs }) => {
      try {
        const { _id, ...changes } = inputs;
        const promotion = await Promotion.findByIdAndUpdate(_id, changes, { lean: true });
        return promotion;
      } catch (err) {
        throw new Error(err);
      }
    },
    deletePromotion: async (_, _id) => {
      try {
        const promotion = <TYPES.Promotion>(
          await Promotion.findByIdAndDelete(_id, { lean: true })
        );
        return !!promotion;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default promotions;
