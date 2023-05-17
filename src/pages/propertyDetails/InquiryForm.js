import React, { useState, useEffect } from 'react'
import * as Yup from "yup";
import moment from 'moment';
import { Form } from "antd";
import { Formik } from "formik";
import { toast } from "react-toastify";
import FormControl from "common/formControl";
import { createLeads, createInquiries } from './api';
import InquiryDateModal from 'common/inquiryDateModal';

const Index = ({ startDate, endDate, locationId, location, name }) => {
    const brokerId = localStorage.getItem('brokerId')
    const [selectedDate, setSelectedDate] = useState({})
    const employeeId = localStorage.getItem('employeeId')
    const [guestPreference, setGuestPreference] = useState(null)
    const [sourcePreference, setSourcePreference] = useState(null)
    const [contactPreferenceType, setContactPreferenceType] = useState(null)
    const [inquiryDateModalState, setInquiryDateModalState] = useState(false)
    const checkInDate = moment(selectedDate?.startDate).format('MMM D, YYYY')
    const checkOutDate = moment(selectedDate?.endDate).format('MMM D, YYYY')
    const start = moment(selectedDate?.startDate).format('MM/DD/YYYY')
    const end = moment(selectedDate?.endDate).format('MM/DD/YYYY')
    const dateString = `${checkInDate} - ${checkOutDate}`

    const inquiryObj = {
        leadID: "",
        carRental: 0,
        boatRental: 0,
        startDate: start,
        endDate: end,
        specialRequest: "test",
    }

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        guests: "",
        request: "",
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
        inquiryObj.specialRequest = data.request
        data.lastName = nameParts[nameParts.length - 1];

        resetForm()
        setSelectedDate({})
        setGuestPreference(null)
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
        if (startDate && endDate) return setSelectedDate({ startDate, endDate })
    }, [startDate, endDate])
    const guestDropdownValueHandle = (value) => {
        if(value<=1){
            return `${value} Guest`
        }else{
            return `${value} Guests`
        }
    }
    return (
        <div className='inquiry-form'>
            {inquiryDateModalState ? (
                <InquiryDateModal
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    checkOutDate={selectedDate.endDate}
                    checkInDate={selectedDate.startDate}
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
                                        {Object.keys(selectedDate).length === 0 ? 'Check In/Out *' : dateString}
                                    </div>

                                    <FormControl
                                        name='guests'
                                        control='select'
                                        value={guestPreference}
                                        options={guestPreferences}
                                        placeholder='Number of guests'
                                        onSelect={(value, key) => [formik.setFieldValue("guests", `${key}`), setGuestPreference(guestDropdownValueHandle(value))]}
                                        className={
                                            formik.errors.guests &&
                                                formik.touched.guests
                                                ? "is-invalid"
                                                : ""
                                        }
                                    />

                                    <FormControl
                                        type='text'
                                        name='request'
                                        control='textarea'
                                        placeholder='Do you have any special request?'
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
                                        control='select'
                                        value={sourcePreference}
                                        name="sourcePreferenceType"
                                        options={sourcePreferences}
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
                                        name='name'
                                        type='text'
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

const guestPreferences = [
    { id: "0", name: "0" },
    { id: "1", name: "1 " },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
    { id: "5", name: "5" },
    { id: "6", name: "6" },
    { id: "7", name: "7" },
    { id: "8", name: "8" },
    { id: "9", name: "9" },
    { id: "10", name: "10" },
    { id: "11", name: "11" },
    { id: "12", name: "12" },
    { id: "13", name: "13" },
    { id: "14", name: "14" },
    { id: "15", name: "15" },
    { id: "16", name: "16" },
    { id: "17", name: "17" },
    { id: "18", name: "18" },
    { id: "19", name: "19" },
    { id: "20", name: "20" },
    { id: "21", name: "21" },
    { id: "22", name: "22" },
    { id: "23", name: "23" },
    { id: "24", name: "24" },
    { id: "25", name: "25" },
]

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    guests: Yup.string().required("Guest is required"),
    request: Yup.string().required("Request is required"),
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