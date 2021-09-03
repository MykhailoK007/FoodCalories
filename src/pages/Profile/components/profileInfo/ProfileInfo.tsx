import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import cn from 'classnames';
import { AppState } from '../../../../store/store';
import css from './ProfileInfo.module.scss';

interface ProfileInfoProps {
  handleClick(): void;
}
export const ProfileInfo = ({ handleClick }: ProfileInfoProps) => {
  const [isDropDownActive, setSsDropDownActive] = useState<boolean>(false);
  const { firstName, lastName, email, username, phoneNumber, description, picture } = useSelector(
    ({ user }: AppState) => user
  );
  const getFullName = `${firstName || ''} ${lastName || ''}` || 'Empty';
  return (
    <div>
      <div className={css.profileHeader}>
        <div className={css.dropdown}>
          <button onClick={setSsDropDownActive.bind(null, prev => !prev)}>...</button>
          <div
            className={cn(css.dropdownContent, {
              [css.showDropdown]: isDropDownActive
            })}
          >
            <div onClick={handleClick}>Edit</div>
          </div>
        </div>
      </div>
      <div className={css.profileInfo}>
        <div className={css.profileInfoAvatar}>
          {picture ? <img src={picture} alt='Avatar' /> : <AiOutlineUser />}

          <label className={css.editAvatar}>
            Edit
            <input type='file' accept='image/*' />
          </label>
        </div>
        <div className={css.profileInfoName}>{getFullName}</div>
        <div className={css.profileInfoAbout}>
          <div className={css.title}>About</div>
          <div className={css.subtitle}>{description}</div>
        </div>
      </div>
      <div className={css.profileAdditionalInfo}>
        <div className={css.additionalInfoSection}>
          <div className={css.title}>Username:</div>
          <div className={css.subtitle}>{username}</div>
        </div>
        <div className={css.additionalInfoSection}>
          <div className={css.title}>Mobile:</div>
          <div className={css.subtitle}>{phoneNumber || 'Empty'}</div>
        </div>
        <div className={css.additionalInfoSection}>
          <div className={css.title}>E-mail:</div>
          <div className={css.subtitle}>{email}</div>
        </div>
      </div>
    </div>
  );
};

// const AvatarEditor = () => {

// }
