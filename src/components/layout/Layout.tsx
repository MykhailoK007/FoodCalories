import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import cn from 'classnames';
import { LeftSidebar } from './leftSidebar';
import { Header } from './header';
import css from './Layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const [isDropDownMenuActive, setIsDropDownMenuActive] = useState<boolean>(false);
  const toggleDropDownMenu = () => {
    setIsDropDownMenuActive(prev => !prev);
  };
  return (
    <div>
      <Header toggleBtn={toggleDropDownMenu} />
      <div className={css.toggleDropDownMenu} onClick={toggleDropDownMenu}>
        {isDropDownMenuActive ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </div>
      <div className={css.pageWrapper}>
        <div
          className={cn(css.aside, {
            [css.showAside]: isDropDownMenuActive === true
          })}
        >
          <LeftSidebar />
        </div>
        <main className={css.content}>{children}</main>
      </div>
    </div>
  );
};
