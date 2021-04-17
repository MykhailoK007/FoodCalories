import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormikInput } from '../../components/shared/formikAdapter/FormikInput';
import { Input } from '../../components/shared/Input/Input';
import { SignInRoute } from '../../router/routes';
import { RegisterForm } from '../../utils/validation-schemas';
import css from './Auth.module.scss';

interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
}
const defaultValues: RegisterFormValues = {
  email: '',
  username: '',
  password: ''
};
export const Register = () => (
  <Formik
    initialValues={defaultValues}
    validationSchema={RegisterForm}
    onSubmit={() => {
      1;
    }}
  >
    <div className={css.form}>
      <div className={css.formHeader}>
        <div className={css.title}>Register Account</div>
        <div className={css.subtitle}>Get your free FoodCalories account now.</div>
      </div>
      <div className={css.formBody}>
        <div className={css.formBodyInputs}>
          <FormikInput
            type='email'
            placeholder='Enter email'
            name='email'
            label='Email'
            styles={{ inputWrapper: css.inputWrapper }}
          />
          <FormikInput
            type='text'
            placeholder='Enter username'
            name='username'
            label='Username'
            styles={{ inputWrapper: css.inputWrapper }}
          />
          <FormikInput
            type='password'
            placeholder='Enter password'
            name='password'
            label='Password'
            styles={{ inputWrapper: css.inputWrapper }}
          />
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
  </Formik>
);
