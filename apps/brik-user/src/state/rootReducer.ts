import { combineReducers } from 'redux';
import { userStore, alertStore } from '@brik-base/store';

export default combineReducers({
  user: userStore.reducer,
  alert: alertStore.reducer,
});
