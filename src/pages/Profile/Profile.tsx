import React from 'react';
import css from './Profile.module.scss';

export const Profile = () => (
  <div>
    <header className={css.contentHeader}>Profile</header>
    <div className={css.contentBody}>
      <div className={css.editBtn}>
        <button>...</button>
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
  </div>
);
