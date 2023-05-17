import React, { useState, useEffect } from 'react';
import * as Yup from "yup";
import moment from 'moment';
import { Form } from "antd";
import { Formik } from "formik";
import { toast } from "react-toastify";
import FormControl from "common/formControl";
import { createLeads, createInquiries } from './api';
import InquiryDateModal from './InquiryDateModal';

const Index = ({ selectDate, name, locationId, location }) => {
    const brokerId = localStorage.getItem('brokerId')
    const [selectedDate, setSelectedDate] = useState({})
    const employeeId = localStorage.getItem('employeeId')
    const [sourcePreference, setSourcePreference] = useState(null)
    const [contactPreferenceType, setContactPreferenceType] = useState(null)
    const [inquiryDateModalState, setInquiryDateModalState] = useState(false)
    const pickUp = moment(selectedDate.pickUp).format('MMM D, YYYY')
    const dropOff = moment(selectedDate.dropOff).format('MMM D, YYYY')
    const start = moment(selectedDate.pickUp).format('MM/DD/YYYY')
    const end = moment(selectedDate.dropOff).format('MM/DD/YYYY')
    const dateString = `${pickUp} - ${dropOff}`

    const inquiryObj = {
        leadID: "",
        carRental: 1,
        boatRental: 0,
        startDate: start,
        endDate: end,
        specialRequest: "test",
    }

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        leadSourceID: "",
        transactionStatusID: 1,
        sourcePreferenceType: "",
        contactPreferenceType: "",
        contactPreferenceTypeID: "",
    };

    const handleSubmit = async (data, { resetForm }) => {
        if (Object.keys(selectedDate).length === 0) return alert('Date is required')
        const nameParts = data.name.split(' ');
        data.firstName = nameParts[0];
        data.lastName = nameParts[nameParts.length - 1];

        resetForm()
        setSelectedDate({})
        setSourcePreference(null)
        setContactPreferenceType(null)
        await createLeads(employeeId, data)
            .then((res) => inquiryObj.leadID = res.data.Data)
            .then((res) => {
                createInquiries(employeeId, brokerId, location, locationId, name, inquiryObj)
                    .then((res) => toast('Your request has been submitted.'))
                    .catch((err) => toast('Some thing went wrong'))
            })
            .catch((err) => {
                if (err.status === 400 && err.data.Data) {
                    inquiryObj.leadID = err.data.Data
                    createInquiries(employeeId, brokerId, location, locationId, name, inquiryObj)
                        .then((err) => toast('Your request has been submitted.'))
                        .catch((err) => toast('Some thing went wrong'))
                }
                else {
                    toast('Some thing went wrong')
                }
            })
    };

    useEffect(() => {
        if (Object.keys(selectDate).length !== 0) {
            setSelectedDate({ pickUp: selectDate.pickUp, dropOff: selectDate.dropOff })
        }
    }, [selectDate])

    return (
        <div className='inquiry-form'>
            {inquiryDateModalState ? (
                <InquiryDateModal
                    pickUp={selectedDate.pickUp}
                    dropOff={selectedDate.dropOff}
                    setSelectDate={setSelectedDate}
                    setInquiryDateModalState={setInquiryDateModalState}
                />
            ) : null}
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
                                <div className='fields-wrapper'>
                                    <div className="datepicker" onClick={() => setInquiryDateModalState(true)}>
                                        {Object.keys(selectedDate).length === 0 ? 'Pick Up/Drop Off *' : dateString}
                                    </div>

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
                                        control='select'
                                        value={sourcePreference}
                                        options={sourcePreferences}
                                        name="sourcePreferenceType"
                                        placeholder='How Did you hear about us ?'
                                        onSelect={(value, key) => [formik.setFieldValue("leadSourceID", key), setSourcePreference(value)]}
                                        className={
                                            formik.errors.sourcePreferenceType &&
                                                formik.touched.sourcePreferenceType
                                                ? "is-invalid"
                                                : ""
                                        }
                                    />

                                    <FormControl
                                        type='text'
                                        name='name'
                                        control='input'
                                        placeholder='Name *'
                                        className={
                                            formik.errors.name && formik.touched.name
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />

                                </div>
                                <div className="btn-container">
                                    <button type='submit'>Submit</button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Index
const phoneRegExp = /^[0-9]+$/;
const contactPreferences = [
    { id: "1", name: "Phone Call" },
    { id: "2", name: "Text Message" },
    { id: "3", name: "Email" },
];
const sourcePreferences = [
    { id: "1", name: "Repeat Client" },
    { id: "2", name: "Google" },
    { id: "3", name: "Instagram" },
    { id: "4", name: "Somewhere else" },
];
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
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