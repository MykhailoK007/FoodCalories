import React from 'react';
import cn from 'classnames';
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
import { LinkWrapper } from '../../shared/linkWrapper';
import css from './LeftSidebar.module.scss';

interface LeftSidebarProps {
  isDropDownMenuActive: boolean;
}
export const LeftSidebar = ({ isDropDownMenuActive }: LeftSidebarProps) => (
  <div
    className={cn(css.leftSidebar, {
      [css.leftSidebarActive]: isDropDownMenuActive
    })}
  >
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
