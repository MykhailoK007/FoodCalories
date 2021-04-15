import React, { useState } from 'react';
import cn from 'classnames';
import css from './ProfileInfo.module.scss';

interface ProfileInfoProps {
  handleClick(): void;
}
export const ProfileInfo = ({ handleClick }: ProfileInfoProps) => {
  const [isDropDownActive, setSsDropDownActive] = useState<boolean>(false);
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
        <div className={css.profileInfoAvatar} />
        <div className={css.profileInfoName}>FirstName LastName</div>
        <div className={css.profileInfoAbout}>
          <div className={css.title}>About</div>
          <div className={css.subtitle}>Hi, I'm user.</div>
        </div>
      </div>
      <div className={css.profileAdditionalInfo}>
        <div className={css.additionalInfoSection}>
          <div className={css.title}>Username:</div>
          <div className={css.subtitle}>admin</div>
        </div>
        <div className={css.additionalInfoSection}>
          <div className={css.title}>Mobile:</div>
          <div className={css.subtitle}>+380664413233</div>
        </div>
        <div className={css.additionalInfoSection}>
          <div className={css.title}>E-mail:</div>
          <div className={css.subtitle}>firsname@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
