import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputProps } from '../../models/formik';
import { getUserInfo } from '../../state/actions/user.actions';
import { AppState } from '../../state/store';
import { ProfileForm } from './components/profileForm';
import { ProfileInfo } from './components/profileInfo';
import css from './Profile.module.scss';

export const Profile = () => {
  const [isEditModActive, setIsEditModActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { username, firstName, lastName, picture, phoneNumber, email, description } = useSelector(
    ({ user }: AppState) => user
  );
  const handleClick = useCallback(() => {
    setIsEditModActive(prev => !prev);
  }, [setIsEditModActive]);
  useEffect(() => {
    dispatch(getUserInfo.request());
  }, []);

  const inputsFields: InputProps[] = [
    { name: 'username', label: 'Username', placeholder: username },
    { name: 'firstName', label: 'First Name', placeholder: firstName },
    { name: 'lastName', label: 'Last Name', placeholder: lastName },
    { name: 'email', label: 'Email', type: 'email', placeholder: email },
    { name: 'picture', label: 'Avatar', placeholder: picture },
    { name: 'phoneNumber', label: 'Telephone', type: 'tel', placeholder: phoneNumber },
    { name: 'description', label: 'About', placeholder: description }
  ];
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
