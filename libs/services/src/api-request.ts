import axios from 'axios';
import { getLoginAccessToken } from '@brik-base/utils';

class Request {
  public instance;

  constructor(baseUrl: string) {
    const accessToken = getLoginAccessToken();
    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(accessToken ? {Authorization: `Bearer ${accessToken}`} : {}),
      }
    });
    this.instance = instance;
  };

  get = (url) => {
    return this.instance.get(url);
  };

  post = (url, data) => {
    return this.instance.post(url, data);
  };

  put = (url, data) => {
    return this.instance.put(url, data);
  };

  delete = (url) => {
    return this.instance.delete(url);
  };
}

export { Request };
