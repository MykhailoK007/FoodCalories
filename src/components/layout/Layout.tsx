import React, { useState } from 'react';
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
      <Header toggleBtn={toggleDropDownMenu} isDropDownMenuActive={isDropDownMenuActive} />
      <LeftSidebar isDropDownMenuActive={isDropDownMenuActive} />
      <main className={css.content}>{children}</main>
    </div>
  );
};
