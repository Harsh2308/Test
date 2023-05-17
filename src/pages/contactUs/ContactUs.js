import { useState } from "react";
import * as Yup from "yup";
import { Form } from "antd";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { fetchFunction } from './apis';
import { ContactUsPage } from "./style";
import FormControl from "common/formControl";

const Index = () => {
  const brokerId = localStorage.getItem('brokerId')
  const employeeId = localStorage.getItem('employeeId')
  const [contactPreferenceType, setContactPreferenceType] = useState(null)

  const initialValues = {
    firstName: "",
    lastName: "cp_LastName",
    request: "",
    contactPreferenceTypeID: "",
    contactPreferenceType: "",
    phone: "",
    email: "",
  };

  const handleSubmit = async (data, { resetForm }) => {
    resetForm()
    setContactPreferenceType(null)
    await fetchFunction(employeeId, brokerId, data)
      .then((res) => toast('Your request has been submitted.'))
      .catch((err) => toast('Some thing went wrong'))
  };

  return (
    <ContactUsPage>
      <div className='contactus_bg'>
        <div className='contactus_bg_container'>
          <div className='contactus_bg_container_leftside'>
            <div className='contactus-form'>
              <h1 className='main-title'>Contact Us</h1>
              <div className='fields-wrapper'>
                <div className='info'>
                  <span className='item'>
                    <svg
                      width='17'
                      height='11'
                      fill='none'
                      viewBox='0 0 17 11'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.01022 1.14311L7.67689 4.72444C7.90089 4.84444 8.19067 4.90133 8.48222 4.90133C8.77378 4.90133 9.06356 4.84444 9.28756 4.72444L15.9542 1.14311C16.3889 0.909333 16.7996 0 16.0022 0H0.963112C0.165779 0 0.576446 0.909333 1.01022 1.14311ZM16.156 3.10133L9.28756 6.68089C8.98533 6.83911 8.77378 6.85778 8.48222 6.85778C8.19067 6.85778 7.97911 6.83911 7.67689 6.68089C7.37467 6.52266 1.33645 3.35733 0.843112 3.10044C0.496446 2.91911 0.500001 3.13155 0.500001 3.29511V9.77777C0.500001 10.1511 1.00311 10.6667 1.38889 10.6667H15.6111C15.9969 10.6667 16.5 10.1511 16.5 9.77777V3.296C16.5 3.13244 16.5036 2.92 16.156 3.10133Z'
                        fill='white'
                      />
                    </svg>
                    booking@luxuri.com
                  </span>
                  <span className='item'>
                    <svg
                      width='12'
                      height='14'
                      fill='none'
                      viewBox='0 0 12 14'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.66735 5.97877L5.80748 4.93321C6.11949 4.64697 6.33888 4.27406 6.43751 3.86229C6.53615 3.45052 6.50953 3.01868 6.36107 2.62214L5.87389 1.32157C5.69207 0.836302 5.33205 0.438635 4.8672 0.209613C4.40234 -0.0194078 3.86765 -0.0625434 3.37209 0.088998C1.54874 0.646842 0.147224 2.34162 0.578623 4.35464C0.862327 5.67859 1.40476 7.34044 2.43385 9.10907C3.29616 10.5986 4.38097 11.9477 5.65075 13.1096C7.17553 14.4973 9.35377 14.1504 10.7553 12.844C11.131 12.4937 11.3589 12.0133 11.3927 11.5008C11.4265 10.9882 11.2635 10.4821 10.937 10.0856L10.0439 9.00069C9.77474 8.67354 9.41394 8.4343 9.00782 8.3137C8.60171 8.19309 8.16881 8.19662 7.76472 8.32384L6.28988 8.78871C6.23304 8.73027 6.16769 8.66067 6.09544 8.58044C5.79222 8.24499 5.52396 7.87954 5.2948 7.48973C5.07185 7.09629 4.88957 6.68117 4.75076 6.25078C4.72109 6.16069 4.69329 6.07 4.66735 5.97877Z'
                        fill='white'
                      />
                    </svg>
                    (305)925-0789
                  </span>
                </div>
                <div className='form'>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formik) => {
                      return (
                        <Form
                          name='basic'
                          autoComplete='off'
                          onFinish={formik.handleSubmit}
                        >
                          <FormControl
                            type='text'
                            name='request'
                            control='textarea'
                            placeholder='How can we help ?'
                            className={
                              formik.errors.request && formik.touched.request
                                ? "is-invalid"
                                : "customInput"
                            }
                          />

                          <FormControl
                            control='select'
                            name='contactPreferenceType'
                            options={contactPreferences}
                            value={contactPreferenceType}
                            placeholder='Preferred Contact Method'
                            onSelect={(value, key) => [formik.setFieldValue("contactPreferenceTypeID", key), setContactPreferenceType(value)]}
                            className={
                              formik.errors.contactPreferenceType &&
                                formik.touched.contactPreferenceType
                                ? "is-invalid"
                                : ""
                            }
                          />

                          {contactPreferenceType === 'Phone Call'
                            || contactPreferenceType === 'Text Message'
                            ? (
                              <FormControl
                                name='phone'
                                type='number'
                                control='input'
                                placeholder='Best Contact Number *'
                                className={
                                  formik.errors.phone && formik.touched.phone
                                    ? "is-invalid"
                                    : "customInput"
                                }
                              />

                            ) : contactPreferenceType === 'Email' && (
                              <FormControl
                                name='email'
                                type='email'
                                control='input'
                                placeholder='Best Contact Email *'
                                className={
                                  formik.errors.email && formik.touched.email
                                    ? "is-invalid"
                                    : "customInput"
                                }
                              />
                            )
                          }

                          <FormControl
                            type='text'
                            control='input'
                            name='firstName'
                            placeholder='Name *'
                            className={
                              formik.errors.firstName && formik.touched.firstName
                                ? "is-invalid"
                                : "customPasswordInput"
                            }
                          />

                          <div className="btn-container">
                            <button type='submit'>Submit</button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className='contactus_bg_container_rightside'>
            <h1>LUXURI</h1>
          </div>
        </div>
      </div>
    </ContactUsPage>
  );
};

export default Index;
const phoneRegExp = /^[0-9]+$/;
const contactPreferences = [
  { id: "1", name: "Phone Call" },
  { id: "2", name: "Text Message" },
  { id: "3", name: "Email" },
];
const validationSchema = Yup.object({
  firstName: Yup.string().required("Name is required"),
  request: Yup.string().required("Request Message is required"),
  contactPreferenceType: Yup.string().required('Contact preference is required').oneOf(['Email', 'Phone Call', 'Text Message']),
  phone: Yup.string()
    .when('contactPreferenceType', {
      is: 'Phone Call',
      then: Yup.string().required('Phone is required').matches(
        phoneRegExp,
        'Phone number should be numbers only'
      ).min(9, 'Minimum nine character is required'),
    }),
  email: Yup.string()
    .when('contactPreferenceType', {
      is: 'Email',
      then: Yup.string().required('Email is required').email('Email should be valid'),
    }),
});