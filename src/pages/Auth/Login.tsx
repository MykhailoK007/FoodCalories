import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SignInBody } from '../../api/auth';
import { FormikInput } from '../../components/formikAdapter/FormikInput';
import { Input } from '../../components/Input/Input';
import { SignUpRoute } from '../../router/routes';
import { signIn } from '../../state/actions/auth.actions';
import { AppState } from '../../state/store';
import { LoginForm } from '../../utils/validation-schemas';
import css from './Auth.module.scss';

const defaultValues: SignInBody = {
  email: '',
  password: ''
};

export const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(({ auth }: AppState) => auth);

  const handleSubmit = (values: SignInBody) => {
    dispatch(signIn.request(values));
  };
  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmit} validationSchema={LoginForm}>
      <Form>
        <div className={css.form}>
          <div className={css.formHeader}>
            <div className={css.title}>Welcome Back !</div>
            <div className={css.subtitle}>Sign in to continue to FoodCalories.</div>
            {error && <div className={css.message}>{error}</div>}
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
          <button type='submit' className={css.formSubmit}>
            Log In
          </button>
          <div className={css.formFooter}>
            <span>Don't have account ? </span>
            <Link to={SignUpRoute}>Signup now</Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
