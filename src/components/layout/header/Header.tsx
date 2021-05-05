import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { AppState } from '../../../state/store';
import css from './Header.module.scss';

interface HeaderProps {
  toggleBtn(): void;
  isDropDownMenuActive: boolean;
}
export const Header = ({ toggleBtn, isDropDownMenuActive }: HeaderProps) => {
  const { username, picture } = useSelector(({ user }: AppState) => user);
  return (
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
        <span className={css.userInfoNameQQWq}>{username}</span>
        <div className={css.avatar}>
          {picture ? <img src={picture} alt='Avatar' /> : <AiOutlineUser />}
        </div>
      </div>
    </header>
  );
};
