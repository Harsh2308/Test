import React from "react";
import DatePicker from "react-datepicker";
import ErrorMsg from "../fieldErrorMessage";
import { Field, ErrorMessage } from "formik";
import { DatePickerContainer } from "./style";

const Index = (props) => {
  const { name, selectDate, placeholder, label, options, title, ...rest } = props;

  return (
    <DatePickerContainer>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }) => {
          return (
            <div className="customdatepicker">
              <DatePicker
                {...rest}
                id={name}
                name={name}
                selected={selectDate}
                placeholderText={placeholder}
                onChange={(val) => { form.setFieldValue(name, val) }}
              // .toString()
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </DatePickerContainer>
  );
};

export default Index;