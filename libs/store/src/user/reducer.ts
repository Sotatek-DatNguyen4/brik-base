import types from './types';

const initialState = {
  data: {},
  loading: false,
  error: ''
};

export const userReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.LOGIN_LOADING: {
      return {
        ...state,
        data: {},
        loading: true,
        error: ''
      }
    }

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
