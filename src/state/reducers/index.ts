import { combineReducers } from 'redux';
import auth from './auth.reducer';
import user from './user.reducer';

export const allReducers = combineReducers({
  auth,
  user
});
export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
