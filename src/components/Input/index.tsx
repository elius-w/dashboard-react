/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React, { InputHTMLAttributes } from 'react';
import { Container } from './style';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;
