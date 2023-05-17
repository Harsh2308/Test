import React from "react";
import { Input } from "antd";
import ErrorMsg from "../fieldErrorMessage";
import { Field, ErrorMessage } from "formik";
import { InputFieldContainer } from "./style";

const Index = (props) => {
  const { label, type, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props;

  return (
    <InputFieldContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }) => (
          <Input
            {...rest}
            {...field}
            type={type}
            prefix={prefix}
            disabled={disabled}
            className={className}
            maxLength={maxLength}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </InputFieldContainer>
  );
};

export default Index;