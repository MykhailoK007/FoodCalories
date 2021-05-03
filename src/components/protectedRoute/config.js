import * as Path from '../../router/routes';
import { Profile } from '../../pages/Profile/index';

import { Dishes } from '../../pages/Dishes';

export const AUTHORIZE = 'AUTHORIZE';
export const UNAUTHORIZED = 'UNAUTHORIZED';

export default [
  {
    path: Path.ProfileRoute,
    authorized: true,
    exact: false,
    component: Profile
  },
  {
    path: Path.DishesRoute,
    authorized: true,
    exact: false,
    component: Dishes
  }
];
