import React from 'react';
import css from './BodyWrapper.module.scss';

interface BodyWrapperProps {
  children: React.ReactNode;
}
export const BodyWrapper = ({ children }: BodyWrapperProps) => (
  <div className={css.contentBody}>{children}</div>
);
