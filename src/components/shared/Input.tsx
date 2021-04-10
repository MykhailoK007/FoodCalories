import React from 'react';
import { InputProps } from '../../models/formik';

export const Input = ({ styles, label, highlightedText, error, ...props }: InputProps) => (
  <div className={styles?.inputWrapper}>
    <label>
      <input {...props} />
      <span>{label}</span>
      {highlightedText && <span>{highlightedText}</span>}
    </label>
    {error && <div className={styles?.errorWrapper}>* {error}</div>}
  </div>
);
