import React, { useState, useEffect } from 'react'
import * as Yup from "yup";
import moment from 'moment';
import { Form } from "antd";
import { Formik } from "formik";
import { toast } from "react-toastify";
import FormControl from "common/formControl";
import InquiryDateModal from './InquiryDateModal';
import { createLeads, createInquiries } from './api';

const Index = ({ hours, guests, reserveDate, name, locationId, location }) => {
    const brokerId = localStorage.getItem('brokerId')
    const employeeId = localStorage.getItem('employeeId')
    const [selectedDate, setSelectedDate] = useState(null)
    const [hourPreference, setHourPreference] = useState(null)
    const [guestPreference, setGuestPreference] = useState(null)
    const [guestPreferences, setGuestPreferences] = useState(null)
    const [sourcePreference, setSourcePreference] = useState(null)
    const [contactPreferenceType, setContactPreferenceType] = useState(null)
    const [inquiryDateModalState, setInquiryDateModalState] = useState(false)
    const startDate = moment(reserveDate).format('MM/DD/YYYY')
    const endDate = moment(reserveDate).format('MM/DD/YYYY')
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        hours: !hours && Yup.string().required("Hour is required"),
        guests: Yup.string().required("Guest is required"),
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

    const inquiryObj = {
        leadID: "",
        carRental: 0,
        boatRental: 1,
        startDate: startDate,
        endDate: endDate,
        specialRequest: "test",
    }

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        hours: "",
        guests: "",
        firstName: "",
        lastName: "",
        leadSourceID: "",
        transactionStatusID: 1,
        sourcePreferenceType: "",
        contactPreferenceType: "",
        contactPreferenceTypeID: "",
    };

    const handleSubmit = async (data, { resetForm }) => {
        if (!selectedDate) return alert('Date is required')
        const nameParts = data.name.split(' ');
        data.firstName = nameParts[0];
        data.hours = hours ? hours.split(" ")[0] : data.hours
        data.lastName = nameParts[nameParts.length - 1];

        resetForm()
        setSelectedDate(null)
        setHourPreference(null)
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
        let arr = []
        setHourPreference(hours)
        setSelectedDate(reserveDate)
        let limit = guests
        for (let i = 1; i <= limit; i++) {
            let obj = { id: i.toString(), name: `${i}` }
            arr.push(obj)
        }
        setGuestPreferences(arr)
    }, [hours, guests, reserveDate])

    return (
        <div className='inquiry-form'>
            {inquiryDateModalState ? (
                <InquiryDateModal
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
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
                                        {selectedDate ? moment(selectedDate).format("MMM DD, YYYY") : 'Reservation Date *'}
                                    </div>

                                    <FormControl
                                        name='hours'
                                        control='select'
                                        value={hourPreference}
                                        options={hourPreferences}
                                        placeholder='How many hours ?'
                                        onSelect={(value, key) => [formik.setFieldValue("hours", key), setHourPreference(value)]}
                                        className={
                                            formik.errors.hours &&
                                                formik.touched.hours
                                                ? "is-invalid"
                                                : ""
                                        }
                                    />

                                    <FormControl
                                        name='guests'
                                        control='select'
                                        value={guestPreference}
                                        options={guestPreferences}
                                        placeholder='Number of guests'
                                        onSelect={(value, key) => [formik.setFieldValue("guests", key), setGuestPreference(value)]}
                                        className={
                                            formik.errors.guests &&
                                                formik.touched.guests
                                                ? "is-invalid"
                                                : ""
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

const hourPreferences = [
    { id: "4", name: "4 Hours" },
    { id: "6", name: "6 Hours" },
    { id: "8", name: "8 Hours" },
];