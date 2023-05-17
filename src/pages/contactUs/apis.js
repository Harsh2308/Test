import api from '../../api';

export async function createContact(employeeID, brokerID, payload) {
    return await api(`/api/inquiries/Web_ContactUs?brokerID=${brokerID}&employeeID=${employeeID}`, payload, 'POST')
}

export async function getLocations(brokerID) {
    return await api(`/api/properties/GetLocations?brokerID=${brokerID}`)
}

export async function contactPreferenceTypes() {
    return await api(`/api/leads/GetcontactPreferenceTypes`)
}

export async function fetchFunction(employeeID, brokerID, data) {
    const token = localStorage.getItem('luxuri_token');
    return fetch(`${process.env.REACT_APP_API_URL}/api/inquiries/Web_ContactUs?brokerID=${brokerID}&employeeID=${employeeID}`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=utf-8",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}