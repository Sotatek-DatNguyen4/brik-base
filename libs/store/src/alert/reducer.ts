import types from './types';

const initialState = {
  type: '',
  message: '',
};

const alert = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.SUCCESS:
      return {
        type: types.SUCCESS,
        message: action.payload
      };
    case types.WARNING:
      return {
        type: types.WARNING,
        message: action.payload
      };
    case types.ERROR:
      return {
        type: types.ERROR,
        message: action.payload
      };
    case types.CLEAR:
      return {
        type: '',
        message: '',
      };

    default:
      return state;
  }
};

export default alert;
