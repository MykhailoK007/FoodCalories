import React from 'react';

export interface InputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'checkbox' | 'radio' | 'tel';
  autoComplete?: 'off';
  styles?: {
    inputWrapper?: string;
    errorWrapper?: string;
  };
  highlightedText?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onChange?: (e: React.ChangeEvent) => void;
}
export interface FormikTextInputProps extends FormikInput<InputProps> {
  name: string;
}

export type FormikInput<T = unknown> = Omit<T, 'name'>;
