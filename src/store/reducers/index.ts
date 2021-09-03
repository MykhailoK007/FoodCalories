import { combineReducers } from 'redux';
import auth from './auth.reducer';
import user from './user.reducer';
import ingredient from './ingredient.reducer';

export const allReducers = combineReducers({
  auth,
  user,
  ingredient
});
export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
