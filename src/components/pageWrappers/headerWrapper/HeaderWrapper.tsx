import React from 'react';
import css from './HeaderWrapper.module.scss';

interface HeaderWrapperProps {
  children: React.ReactNode;
}
export const HeaderWrapper = ({ children }: HeaderWrapperProps) => (
  <div className={css.contentHeader}>{children}</div>
);
