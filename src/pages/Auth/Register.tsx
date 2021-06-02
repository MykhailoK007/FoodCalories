import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../../state/actions/auth.actions';
import { FormikInput } from '../../components/formikAdapter/FormikInput';
import { Input } from '../../components/Input/Input';
import { ProfileRoute, SignInRoute } from '../../router/routes';
import { RegisterForm } from '../../utils/validation-schemas';
import css from './Auth.module.scss';
import { SignUpBody } from '../../api/auth';
import { AppState } from '../../state/store';

const defaultValues: SignUpBody = {
  email: '',
  username: '',
  password: ''
};
export const Register = () => {
  const dispatch = useDispatch();
  const { error, token } = useSelector(({ auth }: AppState) => auth);
  const history = useHistory();

  const handleSubmit = (values: SignUpBody) => {
    dispatch(signUp.request(values));
    if (token) {
      history.push(ProfileRoute);
    }
  };
  return (
    <Formik initialValues={defaultValues} validationSchema={RegisterForm} onSubmit={handleSubmit}>
      <Form>
        <div className={css.form}>
          <div className={css.formHeader}>
            <div className={css.title}>Register Account</div>
            <div className={css.subtitle}>Get your free FoodCalories account now.</div>
            {error && <div className={css.message}>{error}</div>}
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
            <button type='submit'>Register</button>
          </div>
          <div className={css.formFooter}>
            Already have an account ? <Link to={SignInRoute}>Login</Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
