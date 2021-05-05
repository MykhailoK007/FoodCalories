import { combineReducers } from 'redux';
import auth from './auth.reducer';

export const allReducers = combineReducers({
  auth
});
export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
