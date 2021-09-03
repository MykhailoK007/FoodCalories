import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { AppState } from '../../store/store';
import { DropDown, DropDownItem } from '../../components';
// import { logout } from '../../store/actions/auth.actions';
import css from './Header.module.scss';
// import Modal from '../../components/modal/Modal';

interface HeaderProps {
  toggleBtn(): void;
  isDropDownMenuActive: boolean;
}
export const Header = ({ toggleBtn, isDropDownMenuActive }: HeaderProps) => {
  const { username, picture } = useSelector(({ user }: AppState) => user);
  const [isVisible, setIsVisible] = useState(false);
  // const [visibleModal, setVisibleModal] = useState(false);
  // const dispatch = useDispatch();
  const dropDownFields: DropDownItem[] = [
    // { id: 1, text: 'Logout', handleClick: () => setVisibleModal(true) }
  ];
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
        <div className={css.avatar} onClick={() => setIsVisible(prev => !prev)}>
          {picture ? <img src={picture} alt='Avatar' /> : <AiOutlineUser />}
        </div>
        {isVisible && <DropDown items={dropDownFields} closeDropDown={() => setIsVisible(false)} />}
        {/* {visibleModal && (
          <Modal
            title='Are you sure that you want to logout?'
            handleClick={() => dispatch(logout())}
            closeModal={() => setVisibleModal(false)}
          />
        )} */}
      </div>
    </header>
  );
};
