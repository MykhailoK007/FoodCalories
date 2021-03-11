import React from 'react';

interface InputProps<T> {
  type: T;
  style: T;
  text: T;
}
export const Input = ({ type, style, text }: InputProps<string>) => (
  <label className={style}>
    <input type={type} />
    <span>{text}</span>
  </label>
);
