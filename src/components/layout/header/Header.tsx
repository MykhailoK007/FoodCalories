import React from 'react';
import { VscListFlat } from 'react-icons/vsc';
import css from './Header.module.scss';

interface HeaderProps {
  toggleBtn(): void;
}
export const Header = ({ toggleBtn }: HeaderProps) => (
  <header className={css.header}>
    <button className={css.dropDownMenuBtn} onClick={toggleBtn}>
      <VscListFlat />
    </button>
    <div className={css.logo}>
      <img
        src='https://seeklogo.com/images/D/Dish_500-logo-37EBE3D819-seeklogo.com.png'
        alt='logo'
      />
    </div>
    <div className={css.userInfo}>
      <span className={css.userInfoNameQQWq}>FirstName LastName</span>
      <div className={css.avatar} />
    </div>
  </header>
);
