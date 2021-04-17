import React from 'react';
import cn from 'classnames';
import { InputProps } from '../../../models/formik';
import css from './Input.module.scss';

export const Input = ({ styles, label, highlightedText, error, ...props }: InputProps) => (
  <div className={cn(css.inputWrapper, styles?.inputWrapper)}>
    <label className={css.label}>
      <input {...props} />
      <span className={css.title}>{label}</span>
      {highlightedText && <span>{highlightedText}</span>}
    </label>
    {error && <div className={css.errorWrapper}>* {error}</div>}
  </div>
);
