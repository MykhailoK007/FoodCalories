import React, { useCallback, useState } from 'react';
import { InputProps } from '../../models/formik';
import { ProfileForm } from './components/profileForm';
import { ProfileInfo } from './components/profileInfo';
import css from './Profile.module.scss';

const inputsFields: InputProps[] = [
  { name: 'username', label: 'Username' },
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'avatar', label: 'Avatar' },
  { name: 'telephone', label: 'Telephone', type: 'tel' }
];

export const Profile = () => {
  const [isEditModActive, setIsEditModActive] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setIsEditModActive(prev => !prev);
  }, [setIsEditModActive]);
  return (
    <div>
      <header className={css.contentHeader}>Profile</header>
      <div className={css.contentBody}>
        {isEditModActive ? (
          <ProfileForm handleClick={handleClick} inputsFields={inputsFields} />
        ) : (
          <ProfileInfo handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};
