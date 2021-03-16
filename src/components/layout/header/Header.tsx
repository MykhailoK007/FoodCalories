import React from 'react';
import cn from 'classnames';
import css from './Header.module.scss';

interface HeaderProps {
  toggleBtn(): void;
  isDropDownMenuActive: boolean;
}
export const Header = ({ toggleBtn, isDropDownMenuActive }: HeaderProps) => (
  <header className={css.header}>
    <div className={css.leftSide}>
      <div
        className={cn(css.dropDownMenuBtn, {
          [css.dropDownMenuBtnActive]: isDropDownMenuActive
        })}
        onClick={toggleBtn}
      >
        <div className={css.dropDownMenuBtnBurger} />
      </div>
      <div className={css.logo}>
        <img
          src='https://seeklogo.com/images/D/Dish_500-logo-37EBE3D819-seeklogo.com.png'
          alt='logo'
        />
      </div>
    </div>
    <div className={css.userInfo}>
      <span className={css.userInfoNameQQWq}>FirstName LastName</span>
      <div className={css.avatar} />
    </div>
  </header>
);
