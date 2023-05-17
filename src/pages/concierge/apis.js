import api from '../../api';

export async function create(employeeID, brokerID, payload) {
    return await api(`/api/inquiries/Web_Concierge?brokerID=${brokerID}&employeeID=${employeeID}`, payload, 'POST')
}

export async function getServices(brokerID) {
    return await api(`/api/inquiries/GetConciergeServices`)
}

export async function contactPreferenceTypes() {
    return await api(`/api/leads/GetcontactPreferenceTypes`)
}