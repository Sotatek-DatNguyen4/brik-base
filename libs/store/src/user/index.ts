import { userActions } from './action';
import { userReducer } from './reducer';

export const userStore = {
  action: userActions,
  reducer: userReducer,
};
