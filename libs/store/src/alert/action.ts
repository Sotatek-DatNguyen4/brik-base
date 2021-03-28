import types from './types';

const success = (message: string) => {
  return {type: types.SUCCESS, message};
};

const error = (message: string) => {
  return {type: types.ERROR, message};
};

const warning = (message: string) => {
  return {type: types.WARNING, message};
};

const clear = () => {
  return {type: types.CLEAR};
};


export default {
  success,
  error,
  warning,
  clear
};
