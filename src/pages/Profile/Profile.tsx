import React from 'react';
import { ProfileInfo } from './components/profileInfo';
import css from './Profile.module.scss';

export const Profile = () => (
  <div>
    <header className={css.contentHeader}>Profile</header>
    <div className={css.contentBody}>
      <ProfileInfo />
    </div>
  </div>
);
