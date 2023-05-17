import React, { useState } from "react";
import * as Yup from "yup";
import { Form } from "antd";
import { create } from './apis';
import { Formik } from "formik";
import { toast } from "react-toastify";
import FormControl from "common/formControl";
import { ConciergeFormStyledServices } from "./style.js";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const Index = () => {
    const [services, setServices] = useState([])
    const brokerId = localStorage.getItem('brokerId')
    const employeeId = localStorage.getItem('employeeId')
    const [contactPreferenceType, setContactPreferenceType] = useState(null);

    const initialValues = {
        name: "",
        phone: "",
        request: "",
        firstName: "",
        lastName: "",
        contactPreferenceType: "",
    };

    const handleCheckbox = (e) => {
        const id = e.target.id
        const service = e.target.name
        if (service === 'Massage') {
            if (e.target.checked) return setServices([...services, { conciergeServiceID: id, conciergeService: service, img: "images/conciergeimages/massage.png" }])
            setServices(services.filter(elem => elem.conciergeService !== service))
        }
        else if (service === 'VIP Protection Services') {
            if (e.target.checked) return setServices([...services, { conciergeServiceID: id, conciergeService: service, img: "images/conciergeimages/services.png" }])
            setServices(services.filter(elem => elem.conciergeService !== service))
        }
        else if (service === 'Private Chef') {
            if (e.target.checked) return setServices([...services, { conciergeServiceID: id, conciergeService: service, img: "images/conciergeimages/chef.png" }])
            setServices(services.filter(elem => elem.conciergeService !== service))
        }
        else if (service === 'Private Travel & Luxury Tours') {
            if (e.target.checked) return setServices([...services, { conciergeServiceID: id, conciergeService: service, img: "images/conciergeimages/tour.png" }])
            setServices(services.filter(elem => elem.conciergeService !== service))
        }
        else if (service === 'Event/Restaurant Reservations') {
            if (e.target.checked) return setServices([...services, { conciergeServiceID: id, conciergeService: service, img: "images/conciergeimages/restaurant.png" }])
            setServices(services.filter(elem => elem.conciergeService !== service))
        }
    }

    const handleSubmit = async (data, { resetForm }) => {
        if (services.length === 0) return alert('Please select a service')
        const updateServices = services.map(item => {
            return {
                conciergeService: item.conciergeService,
                conciergeServiceID: item.conciergeServiceID
            }
        })
        const nameParts = data.name.split(' ');
        data.firstName = nameParts[0];
        data.lastName = nameParts[nameParts.length - 1];

        resetForm()
        setContactPreferenceType(null)
        const newObj = { ...data, services: updateServices }
        await create(employeeId, brokerId, newObj)
            .then((res) => toast('Your request has been submitted.'))
            .catch((err) => toast('Some thing went wrong'))
    };

    return (
        <ConciergeFormStyledServices repeat={services.length}>
            <h1 className='title'>Request Your Desired Service</h1>
            <div className={`slider_wrapper ${
          services.length === 0 && "sliper_wrapper_first"
        }`}>
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
                                    <div className='form_container'>
                                        <div className='checkBoxes'>
                                            <FormControlLabel
                                                className='controlLabel'
                                                control={
                                                    <Checkbox
                                                        id="1"
                                                        size='medium'
                                                        name='Massage'
                                                        color='default'
                                                        className='checkbox'
                                                        onChange={(e) => {
                                                            handleCheckbox(e);
                                                            formik.setFieldValue('services', ...services);
                                                        }}
                                                    />
                                                }
                                                label={<span className='checkboxLabel'>Massage</span>}
                                            />

                                            <FormControlLabel
                                                className='controlLabel'
                                                control={
                                                    <Checkbox
                                                        id="2"
                                                        size='medium'
                                                        color='default'
                                                        className='checkbox'
                                                        name='VIP Protection Services'
                                                        onChange={(e) => {
                                                            handleCheckbox(e);
                                                            formik.setFieldValue('services', ...services);
                                                        }}
                                                    />
                                                }
                                                label={<span className='checkboxLabel'>VIP Protection Services</span>}
                                            />

                                            <FormControlLabel
                                                className='controlLabel'
                                                control={
                                                    <Checkbox
                                                        id="3"
                                                        size='medium'
                                                        color='default'
                                                        name='Private Chef'
                                                        className='checkbox'
                                                        onChange={(e) => {
                                                            handleCheckbox(e);
                                                            formik.setFieldValue('services', ...services);
                                                        }}
                                                    />
                                                }
                                                label={<span className='checkboxLabel'>Private Chef</span>}
                                            />

                                            <FormControlLabel
                                                className='controlLabel'
                                                control={
                                                    <Checkbox
                                                        id="4"
                                                        size='medium'
                                                        color='default'
                                                        className='checkbox'
                                                        name='Private Travel & Luxury Tours'
                                                        onChange={(e) => {
                                                            handleCheckbox(e);
                                                            formik.setFieldValue('services', ...services);
                                                        }}
                                                    />
                                                }
                                                label={<span className='checkboxLabel'>Private Travel & Luxury Tours</span>}
                                            />

                                            <FormControlLabel
                                                className='controlLabel'
                                                control={
                                                    <Checkbox
                                                        id="5"
                                                        size='medium'
                                                        color='default'
                                                        className='checkbox'
                                                        name='Event/Restaurant Reservations'
                                                        onChange={(e) => {
                                                            handleCheckbox(e);
                                                            formik.setFieldValue('services', ...services);
                                                        }}
                                                    />
                                                }
                                                label={<span className='checkboxLabel'>Event/Restaurant Reservations</span>}
                                            />
                                            {formik.errors.services && formik.touched.services && (
                                                <div className='is-invalid'></div>
                                            )}
                                        </div>

                                        <FormControl
                                            type='text'
                                            name='request'
                                            control='textarea'
                                            placeholder='Do You Have Any Special Request?'
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

                                        <div className='btn-container'>
                                            <button type='submit'>Submit</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
                <div className='separator'></div>
                <div className='services'>
                    {services.length > 0 && (
                        services.map((item, index) => (
                            <img key={index} className='services_service' src={item.img} alt='service' />
                        ))
                    )}
                </div>
            </div>
        </ConciergeFormStyledServices>
    )
}

export default Index
const phoneRegExp = /^[0-9]+$/;
const contactPreferences = [
    { id: "1", name: "Phone Call" },
    { id: "2", name: "Text Message" },
    { id: "3", name: "Email" },
];
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
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