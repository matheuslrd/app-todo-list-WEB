import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  iconLeft?: React.ReactNode;
  labelClass?: string;
}

export default function Input(props: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <label htmlFor={fieldName} className={props.labelClass}>
      {props.iconLeft}
      <input ref={inputRef} id={fieldName} defaultValue={defaultValue} {...props} />
      {error && <span data-testid={`${props.name}-error`}>{error}</span>}
    </label>
  );
}
