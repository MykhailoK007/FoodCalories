import React from 'react';
import { Input } from '../../components/shared/Input';
import css from './Login.module.scss';

export const Login = () => (
  <div className={css.form}>
    <div className={css.formHeader}>
      <div className={css.title}>Welcome Back !</div>
      <div className={css.subtitle}>Sign in to continue to FoodCalories.</div>
    </div>
    <div className={css.formBody}>
      <div className={css.formBodyInputs}>
        <div className={css.inputWrapper}>
          <div className={css.title}>Email</div>
          <input type='text' />
        </div>
        <div className={css.inputWrapper}>
          <div className={css.title}>Password</div>
          <div className={css.restorePassword}>Forgot password?</div>
          <input type='password' />
        </div>
      </div>
      <div className={css.formBodyActions}>
        <Input type='checkbox' style={css.formBodyActionsRememberMe} text='Remember me' />
      </div>
    </div>
    <button className={css.formSubmit}>Log In</button>
    <div className={css.formFooter}>
      Don't have account? <span>Signup now</span>
    </div>
  </div>
);
