import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/shared/Input';
import { SignInRoute } from '../../router/routes';
import css from './Auth.module.scss';

export const Register = () => (
  <div className={css.form}>
    <div className={css.formHeader}>
      <div className={css.title}>Register Account</div>
      <div className={css.subtitle}>Get your free FoodCalories account now.</div>
    </div>
    <div className={css.formBody}>
      <div className={css.formBodyInputs}>
        <div className={css.inputWrapper}>
          <div className={css.title}>Email</div>
          <input type='email' placeholder='Enter email' />
        </div>
        <div className={css.inputWrapper}>
          <div className={css.title}>Username</div>
          <input type='text' placeholder='Enter username' />
        </div>
        <div className={css.inputWrapper}>
          <div className={css.title}>Password</div>
          <input type='password' placeholder='Enter password' />
        </div>
      </div>
      <div className={css.formBodyActions}>
        <Input
          type='checkbox'
          label='I accept'
          styles={{ inputWrapper: css.formBodyActionsRememberMe }}
          highlightedText='Terms and conditions'
        />
      </div>
    </div>
    <div className={css.formSubmitRegister}>
      <button>Register</button>
    </div>
    <div className={css.formFooter}>
      Already have an account ? <Link to={SignInRoute}>Login</Link>
    </div>
  </div>
);
