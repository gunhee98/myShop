import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import styled from "styled-components";

const S_Input = styled.input<{ isFocus: boolean }>`
  padding: 1rem 0;
  border: none;
  border-bottom: ${props =>
    props.isFocus ? "2px solid #21bf48" : "1px solid #c4c4c4"};
  outline: none;
  font-size: 1.6rem;
`;
interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  registerOption: {
    required: string | boolean;
    minLength?: { value: number; message: string };
    pattern?: {
      value: RegExp;
      message: string;
    };
    validate?: (value: string) => boolean | string;
  };
}

export default function Input({
  type,
  name,
  placeholder,
  register,
  registerOption,
}: InputProps) {
  const [isFocus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  return (
    <S_Input
      type={type}
      {...register(name, registerOption)}
      placeholder={placeholder}
      name={name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocus={isFocus}
    />
  );
}
