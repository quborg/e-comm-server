/* eslint-disable max-len */

interface RegexType extends Record<string, any> {
  [key: string]: RegExp | RegexType;
}

export const Regex: RegexType = {
  name: {
    full: /^([\s\S]{2,26})([a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+)$/i,
    length: /^[\s\S]{2,26}$/,
    content: /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i,
  },
  username: {
    full: /^[a-zA-Z0-9_-]{3,16}$/,
    length: /^[\s\S]{3,16}$/,
    content: /^[a-zA-Z0-9_-]+$/,
  },
  email:
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: {
    full: /^([\s\S]{8,256})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~])$/,
    length: /^[\s\S]{8,256}$/,
    oneLower: /(?=.*[a-z])/,
    oneUpper: /(?=.*[A-Z])/,
    oneDigit: /(?=.*\d)/,
    oneSpecialChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
  },
  token: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
  url: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
  price: /^\d{10}$/,
};

export const validationConfig = {
  user: {
    name: {
      min: 2,
      max: 26,
    },
    username: {
      min: 3,
      max: 16,
    },
    pass: {
      min: 8,
      max: 256,
    },
  },
  tag: {
    name: {
      min: 2,
      max: 12,
    },
  },
};
