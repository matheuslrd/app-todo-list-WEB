import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  iconleft?: React.ReactNode;
  labelclass?: string;
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

  const preventProps = {
    ...props,
    iconleft: null,
    labelclass: null,
  };

  return (
    <>
      <label htmlFor={fieldName} className={props.labelclass}>
        {props.iconleft}
        <input
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          {...preventProps}
        />
      </label>
      {error && <span data-testid={`${props.name}-error`}>{error}</span>}
    </>
  );
}
