import React from 'react';
import { Formik } from 'formik';
import { InputProps } from '../../../../models/formik';
import css from './ProfileForm.module.scss';
import { FormikInput } from '../../../../components/shared/formikAdapter/FormikInput';
import { EditProfileForm } from '../../../../utils/validation-schemas';

interface ProfileFormProps {
  handleClick(): void;
  inputsFields: InputProps[];
}
interface ProfileFormValues {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  telephone: string;
}
const defaultValues: ProfileFormValues = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  telephone: ''
};

export const ProfileForm = ({ handleClick, inputsFields }: ProfileFormProps) => (
  <Formik
    initialValues={defaultValues}
    onSubmit={() => {
      // eslint-disable-next-line
      console.log('Submit');
    }}
    validationSchema={EditProfileForm}
  >
    {() => (
      <div className={css.form}>
        <div className={css.formHeader}>Here you can change profile data</div>
        <div className={css.formBody}>
          {inputsFields.map(inputData => (
            <FormikInput
              type={inputData.type}
              name={inputData.name || ''}
              styles={{ inputWrapper: css.inputWrapper, errorWrapper: css.errorWrapper }}
              label={inputData.label}
            />
          ))}
        </div>
        <div className={css.formSubmit}>
          <button className={css.cancel} onClick={handleClick}>
            Cancel
          </button>
          <button className={css.submit} onClick={handleClick}>
            Update
          </button>
        </div>
      </div>
    )}
  </Formik>
);
