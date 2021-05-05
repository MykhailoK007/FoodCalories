import React from 'react';
import { Link } from 'react-router-dom';
import css from './LinkWrapper.module.scss';

interface LinkWrapperProps {
  Icon: React.ReactNode;
  route: string;
  title: string;
  handleClick(): void;
}
export const LinkWrapper = ({ Icon, route, title, handleClick }: LinkWrapperProps) => (
  <Link to={route} className={css.linkWrapper} onClick={handleClick}>
    {Icon}
    <span>{title}</span>
  </Link>
);
