import React from 'react';
import { useField } from 'formik';
import { Input } from '../Input/Input';
import { FormikTextInputProps } from '../../models/formik';

export const FormikInput = ({ name, ...props }: FormikTextInputProps) => {
  const [field, meta] = useField<string>(name);
  const error = meta.touched ? meta.error : undefined;
  return <Input {...field} {...props} error={error} />;
};
