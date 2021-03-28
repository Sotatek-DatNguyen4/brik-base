import { get } from 'lodash';

export const getApiErrorMessage = (error: any) => {
  return get(error, 'response.data.message') || get(error, 'message', '');
};

export const getApiSuccessMessage = (response: any) => {
  return get(response, 'data.message', 'success');
};
