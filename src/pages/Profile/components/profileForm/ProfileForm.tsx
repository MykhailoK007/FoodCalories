import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { InputProps } from '../../../../models/formik';
import { FormikInput } from '../../../../components/shared/formikAdapter/FormikInput';
import { EditProfileForm } from '../../../../utils/validation-schemas';
import { updateUserInfo } from '../../../../state/actions/user.actions';
import { AppState } from '../../../../state/store';
import css from './ProfileForm.module.scss';

interface ProfileFormProps {
  handleClick(): void;
  inputsFields: InputProps[];
}
interface ProfileFormValues {
  username: string;
  firstName: string;
  lastName: string;
  picture: string;
  phoneNumber: string;
  description: string;
  email?: string;
}
export const ProfileForm = ({ handleClick, inputsFields }: ProfileFormProps) => {
  const dispatch = useDispatch();
  const {
    username,
    firstName = '',
    lastName = '',
    picture = '',
    phoneNumber = '',
    description = '',
    email,
    error
  } = useSelector(({ user }: AppState) => user);

  const defaultValues: ProfileFormValues = {
    username,
    firstName,
    lastName,
    picture,
    phoneNumber,
    description,
    email
  };
  const checkIsEmailChanged = (state: ProfileFormValues) => {
    // eslint-disable-next-line no-param-reassign
    state.email === email ? delete state.email : '';
  };
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={async values => {
        checkIsEmailChanged(values);
        await Promise.resolve(dispatch(updateUserInfo.request(values)));
        !error && handleClick();
      }}
      validationSchema={EditProfileForm}
    >
      <Form>
        <div className={css.form}>
          <div className={css.formHeader}>Here you can change profile data</div>
          {error && <div className={css.message}>{error}</div>}
          <div className={css.formBody}>
            {inputsFields.map(inputData => (
              <FormikInput
                key={inputData.name}
                type={inputData.type}
                name={inputData.name!}
                styles={{ inputWrapper: css.inputWrapper }}
                label={inputData.label}
              />
            ))}
          </div>
          <div className={css.formSubmit}>
            <button className={css.cancel} onClick={handleClick}>
              Cancel
            </button>
            <button className={css.submit} type='submit'>
              Update
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
