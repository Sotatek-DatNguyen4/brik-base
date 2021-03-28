import { get } from 'lodash';

export const getLoginAccessToken = () => {
  const localStorageObject = JSON.parse(localStorage.getItem("persist:root") || '{}');
  const { user = '' } = localStorageObject;
  const userObject = JSON.parse(user);
  return get(userObject, 'data.access_token');
};
