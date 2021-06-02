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
} from '../../router/routes';
import { LinkWrapper } from '../../components/linkWrapper';
import css from './LeftSidebar.module.scss';

interface LeftSidebarProps {
  isDropDownMenuActive: boolean;
  handleClick(): void;
}
export const LeftSidebar = ({ isDropDownMenuActive, handleClick }: LeftSidebarProps) => (
  <div className={css.leftSidebarWrapper}>
    <div
      className={cn(css.leftSidebar, {
        [css.leftSidebarActive]: isDropDownMenuActive
      })}
    >
      <div className={css.section}>
        <div className={css.title}>Main</div>
        <nav>
          <LinkWrapper
            route={DashboardRoute}
            title='Dashboard'
            Icon={<RiHome5Line />}
            handleClick={handleClick}
          />
          <LinkWrapper
            route={ProfileRoute}
            title='Profile'
            Icon={<BiUserCircle />}
            handleClick={handleClick}
          />
        </nav>
      </div>
      <div className={css.section}>
        <div className={css.title}>Dishes</div>
        <nav>
          <LinkWrapper
            route={MenuScheduleRoute}
            title='Menu Schedule'
            Icon={<FiCalendar />}
            handleClick={handleClick}
          />
          <LinkWrapper
            route={DishesRoute}
            title='Dishes'
            Icon={<AiOutlineShop />}
            handleClick={handleClick}
          />
          <LinkWrapper
            route={WishlistRoute}
            title='Wishlist'
            Icon={<RiFileList3Line />}
            handleClick={handleClick}
          />
        </nav>
      </div>
    </div>
  </div>
);
