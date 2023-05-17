import React from "react";
import { Input } from "antd";
import { TextAreaContainer } from "./style";
import ErrorMsg from "../fieldErrorMessage";
import { useField, ErrorMessage } from "formik";

const Index = ({ placeholder, label, defaultValue, ...props }) => {
  const { TextArea } = Input;
  const [field] = useField(props);

  return (
    <TextAreaContainer>
      <div className='customTextArea'>
        <TextArea
          {...field}
          {...props}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
      <ErrorMessage name={props.name} component={ErrorMsg} />
    </TextAreaContainer>
  );
};

export default Index;