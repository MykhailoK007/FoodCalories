import React from 'react';
// import loader from '../../assets/icons/loader.gif';
// import styles from './styles.module.scss';

interface LoaderProps {
  loaded: boolean;
  children?: React.ReactNode;
}
export const Loader = ({ loaded = false, children }: LoaderProps) => {
  if (loaded) return <div>{children}</div>;
  return <div>{!loaded && <div>Loading...</div>}</div>;
};
