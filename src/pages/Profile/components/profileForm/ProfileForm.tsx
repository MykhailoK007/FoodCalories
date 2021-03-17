import React from 'react';
import { Input } from '../../../../components/shared/Input';
import css from './ProfileForm.module.scss';

interface InputDataProps {
  type?: string;
  text: string;
}
interface ProfileFormProps {
  handleClick(): void;
}
export const ProfileForm = ({ handleClick }: ProfileFormProps) => {
  const inputsFields = [
    { text: 'Username' },
    { text: 'First Name' },
    { text: 'Last Name' },
    { text: 'Email', type: 'email' },
    { text: 'Avatar' },
    { text: 'Telephone', type: 'tel' }
  ];
  return (
    <div className={css.form}>
      <div className={css.formHeader}>Here you can change profile data</div>
      <div className={css.formBody}>
        {inputsFields.map((inputData: InputDataProps) => (
          <Input
            type={inputData.type || 'string'}
            text={inputData.text}
            style={css.inputWrapper}
            key={inputData.text}
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
  );
};
