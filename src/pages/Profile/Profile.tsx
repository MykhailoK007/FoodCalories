import React, { useState } from 'react';
import { ProfileForm } from './components/profileForm';
import { ProfileInfo } from './components/profileInfo';
import css from './Profile.module.scss';

export const Profile = () => {
  const [isEditModActive, setIsEditModActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsEditModActive(prev => !prev);
  };
  return (
    <div>
      <header className={css.contentHeader}>Profile</header>
      <div className={css.contentBody}>
        {isEditModActive ? (
          <ProfileForm handleClick={handleClick} />
        ) : (
          <ProfileInfo handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};
