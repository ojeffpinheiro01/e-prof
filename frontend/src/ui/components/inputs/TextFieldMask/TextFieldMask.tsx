import React from "react";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

import TextField from "ui/components/inputs/TextField/TextField";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  value: string;
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
