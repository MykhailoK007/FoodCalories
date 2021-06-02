import React, { useCallback, useState } from 'react';
import { LeftSidebar } from './leftSidebar';
import { Header } from './header';
import css from './Layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const [isDropDownMenuActive, setIsDropDownMenuActive] = useState<boolean>(false);
  const toggleDropDownMenu = useCallback(() => {
    setIsDropDownMenuActive(prev => !prev);
  }, [setIsDropDownMenuActive]);
  return (
    <div className={css.layoutWrapper}>
      <Header toggleBtn={toggleDropDownMenu} isDropDownMenuActive={isDropDownMenuActive} />
      <LeftSidebar isDropDownMenuActive={isDropDownMenuActive} handleClick={toggleDropDownMenu} />
      <main className={css.content}>{children}</main>
    </div>
  );
};
