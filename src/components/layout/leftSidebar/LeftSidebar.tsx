import React from 'react';
import { RiHome5Line, RiFileList3Line } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { FiCalendar } from 'react-icons/fi';
import { AiOutlineShop } from 'react-icons/ai';
import {
  DashboardRoute,
  ProfileRoute,
  MenuScheduleRoute,
  DishesRoute,
  WishlistRoute
} from '../../../router/routes';
import css from './LeftSidebar.module.scss';
import { LinkWrapper } from '../../shared/linkWrapper';

export const LeftSidebar = () => (
  <div className={css.leftSidebar}>
    <div className={css.section}>
      <div className={css.title}>Main</div>
      <nav>
        <LinkWrapper route={DashboardRoute} title='Dashboard' Icon={<RiHome5Line />} />
        <LinkWrapper route={ProfileRoute} title='Profile' Icon={<BiUserCircle />} />
      </nav>
    </div>
    <div className={css.section}>
      <div className={css.title}>Dishes</div>
      <nav>
        <LinkWrapper route={MenuScheduleRoute} title='Menu Schedule' Icon={<FiCalendar />} />
        <LinkWrapper route={DishesRoute} title='Dishes' Icon={<AiOutlineShop />} />
        <LinkWrapper route={WishlistRoute} title='Wishlist' Icon={<RiFileList3Line />} />
      </nav>
    </div>
  </div>
);
