import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormikInput } from '../../components/shared/formikAdapter/FormikInput';
import { Input } from '../../components/shared/Input/Input';
import { SignUpRoute } from '../../router/routes';
import { LoginForm } from '../../utils/validation-schemas';
import css from './Auth.module.scss';

interface LoginFormValues {
  email: string;
  password: string;
}
const defaultValues: LoginFormValues = {
  email: '',
  password: ''
};

export const Login = () => (
  <Formik
    initialValues={defaultValues}
    onSubmit={() => {
      true;
    }}
    validationSchema={LoginForm}
  >
    <div className={css.form}>
      <div className={css.formHeader}>
        <div className={css.title}>Welcome Back !</div>
        <div className={css.subtitle}>Sign in to continue to FoodCalories.</div>
      </div>
      <div className={css.formBody}>
        <div className={css.formBodyInputs}>
          <FormikInput
            type='email'
            name='email'
            label='Email'
            styles={{ inputWrapper: css.inputWrapper }}
          />
          <div className={css.inputWrapper}>
            <div className={css.title}>Password</div>
            <div className={css.restorePassword}>Forgot password?</div>
            <FormikInput type='password' name='password' />
          </div>
        </div>
        <div className={css.formBodyActions}>
          <Input
            type='checkbox'
            styles={{ inputWrapper: css.formBodyActionsRememberMe }}
            label='Remember me'
          />
        </div>
      </div>
      <button className={css.formSubmit}>Log In</button>
      <div className={css.formFooter}>
        Don't have account? <Link to={SignUpRoute}>Signup now</Link>
      </div>
    </div>
  </Formik>
);
