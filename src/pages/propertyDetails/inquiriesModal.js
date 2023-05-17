import React, { useState } from "react";
import { Form } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";
import FormControl from "../../common/formControl";
import { createInquiries, createLeads } from "./api";
import DynamicModal from "../../common/galleryModal";
import CustomButton from "../../common/customButton";
import { InquiriesModalStyle } from "./style";
import moment from "moment";

const InquiriesModal = ({ inquiriesModalState, setinquiriesModalState }) => {
  const now = new Date();
  const [selectedContactUs, setSelectedContactUs] = useState("Phone Number");

  const inquiriesFormValues = {
    firstName: "",
    lastName: "cp_LastName",
    endDate: moment(new Date(now.getFullYear(), now.getMonth() + 1, 0)).format("l"),
    startDate: moment(now).format("l"),
    specialRequest: "",
    phone: "",
  };

  const fromHandler = async (data) => {
    const leadFormdata = {
      firstName: data.firstName,
      lastName: data.lastName,
      inquiryAmenities: "",
      leadVerificationStatusID: 1,
      brokerID: 1,
      phone: data.phone,
      address: null,
      email: "",
      dob: null,
      transactionStatusID: 1,
      assignedEmployeeID: 1,
      leadSourceID: 9,
      leadProfessionID: 1,
      imageFileName: "",
      city: null,
      stateID: null,
      stateOrProvince: null,
      countryID: null,
      zipCode: null,
      contactPreferenceTypeID: 1,
      referringBrokerID: null,
      referringBrokerName: null,
    };

    const inquiriFormData = {
      startDate: data.startDate,
      endDate: data.endDate,
      leadID: "",
      cityID: 1,
      minBudget: 5500,
      maxBudget: 7500,
      numberOfGuests: 1,
      numberOfCars: 3,
      carRental: 0,
      boatRental: 1,
      districtID: '',
      transactionStatusID: 1,
      specialRequest: data.specialRequest,
      description: "",
      inquiryAmenities: "",

    }
    await createLeads(1, leadFormdata)
      .then((res) => {
        createInquiries(1, 1, 'miami', '3', 'Villa Isola', { ...inquiriFormData, leadID: res.data.Data }).then((res) => {
          console.log(res, 'resresresresresresres');
        })
          .catch((err) => {
            alert('Some thing went wrong')
          })
      })
      .catch((err) => {
        if (err.status === 400) {
          createInquiries(1, 1, 'miami', '3', 'Villa Isola', { ...inquiriFormData, leadID: err.data.Data }).then((res) => {
            console.log(res, 'resresresresresresres');
          })
            .catch((err) => {
              alert('Some thing went wrong')
            })
        }
        else {
          alert('Some thing went wrong')
        }
      });
  };

  return (
    <DynamicModal
      viewPhotosModalHandler={inquiriesModalState}
      setViewPhotosModalHandler={setinquiriesModalState}
    >
      <InquiriesModalStyle>
        <div className='inuiries_modal_content'>
          <div className='inuiries_modal_content_form'>
            <div className='inuiries_modal_content_form_heading'>
              <h1>Inquire</h1>
            </div>
            <div className='inuiries_modal_content_form_inputs'>
              <Formik
                initialValues={inquiriesFormValues}
                validationSchema={validationSchema}
                onSubmit={fromHandler}
              >
                {(formik) => {
                  return (
                    <Form
                      name='basic'
                      autoComplete='off'
                      onFinish={formik.handleSubmit}
                    >
                      <div className='inuiries_modal_content_form_inputs_main'>
                        <FormControl
                          type='text'
                          name='phone'
                          control='date'
                          placeholder='Best Contact Number'
                          className={
                            formik.errors.phone && formik.touched.phone
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <FormControl
                          type='text'
                          control='textarea'
                          name='specialRequest'
                          placeholder='Please Tell Your Requirement'
                          className={
                            formik.errors.specialRequest &&
                              formik.touched.specialRequest
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <FormControl
                          control='select'
                          options={contactPreferenceType}
                          name='contactPreferenceType'
                          placeholder='How Do you prefer to be contacted'
                          onSelect={(value, key) => setSelectedContactUs(key)}
                          className={
                            formik.errors.contactPreferenceType &&
                              formik.touched.contactPreferenceType
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <FormControl
                          type='text'
                          name='phone'
                          control='input'
                          placeholder='Best Contact Number'
                          className={
                            formik.errors.phone && formik.touched.phone
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <FormControl
                          type='text'
                          maxLength='10'
                          control='input'
                          name='firstName'
                          placeholder='Name'
                          className={
                            formik.errors.firstName && formik.touched.firstName
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <div className='inuiries_modal_content_form_inputs_main_button'>
                          <CustomButton />
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className='inuiries_modal_content_form_button'></div>
          </div>
          <div className='inuiries_modal_content_image'>
            <img src='images/villasInquiryBg.png' alt='villasInquiryBg' />
          </div>
        </div>
      </InquiriesModalStyle>
    </DynamicModal>
  );
};

export default InquiriesModal;
const phoneRegExp = /^[0-9]+$/;
const contactPreferenceType = [
  { id: "1", name: "Email" },
  { id: "2", name: "Phone" },
  { id: "3", name: "Text Message" },
];
const validationSchema = Yup.object({
  firstName: Yup.string().required("Name is required"),
  specialRequest: Yup.string().required("Request Message is Required"),
  phone: Yup.string().required("Phone is required!").matches(phoneRegExp, 'Phone number should be numbers only')
    .min(9, 'Minimum nine character required'),
});