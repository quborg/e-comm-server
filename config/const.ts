const {
  HOST,
  NODE_ENV,
  PORT,
  port = PORT,
  MONGO_CONNECT,
  SECRET_CODE,
  SECRET_CODE2,
  GOOGLE_EMAIL_ADDRESS = '',
  GOOGLE_CLIENT_ID = '',
  GOOGLE_CLIENT_SECRET = '',
  GOOGLE_OAUTH2_REFRESH_TOKEN = '',
  GOOGLE_OAUTH2_ACCESS_TOKEN = '',
  NO_REPLAY_EMAIL_ADDRESS = '',
  CLIENT_HOSTNAME = '',
  HEROKU,
  HEROKU_APP_NAME,
} = process.env;

const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const IS_HEROKU = !!HEROKU;
const MODE = IS_PROD ? 'production' : 'development';
const HEROKU_DOMAIN_NAME = `${HEROKU_APP_NAME}.herokuapp.com`;

const CONST = {
  HOST: IS_HEROKU ? HEROKU_DOMAIN_NAME : HOST,
  PORT: port,
  CLIENT_HOSTNAME,
  DOMAIN: IS_HEROKU ? HEROKU_DOMAIN_NAME : `${HOST}:${port}`,
  MONGO_CONNECT,
  INTROSPECTION: IS_DEV || IS_HEROKU,
  PLAYGROUND: IS_DEV || IS_HEROKU,
  MODE,
  SECRET_CODE,
  SECRET_CODE2,
  PAYLOAD: {
    ID: '',
    email: '',
  },
  GOOGLE: {
    EMAIL: GOOGLE_EMAIL_ADDRESS,
    CLIENT_ID: GOOGLE_CLIENT_ID,
    CLIENT_SECRET: GOOGLE_CLIENT_SECRET,
    OAUTH2_REFRESH_TOKEN: GOOGLE_OAUTH2_REFRESH_TOKEN,
    OAUTH2_ACCESS_TOKEN: GOOGLE_OAUTH2_ACCESS_TOKEN,
    NO_REPLAY: NO_REPLAY_EMAIL_ADDRESS,
  },
  HEROKU,
};

export default CONST;
