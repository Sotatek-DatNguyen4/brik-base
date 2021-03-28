import types from './types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getApiSuccessMessage, getApiErrorMessage } from '@brik-base/utils';
import { Request } from '@brik-base/services';
import alterTypes from '../alert/types';

export const login = (email = '', password = '', baseUrl = '', url = '') => {
  //TODO: improve later
  // eslint-disable-next-line @typescript-eslint/ban-types
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: types.LOGIN_LOADING });
    try {
      const requestInstance = new Request(baseUrl);
      const loginResult = await requestInstance.post(url, {email, password});
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: loginResult.data
      });
      const successMessage = getApiSuccessMessage(loginResult);
      console.log(loginResult, successMessage);
      dispatch({
        type: alterTypes.SUCCESS,
        payload: successMessage
      });
    } catch (error) {
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: error
      });

      const errorMessage = getApiErrorMessage(error);
      dispatch({
        type: alterTypes.ERROR,
        payload: errorMessage
      });
    }
  }
};

export const userActions = {
  login,
};
