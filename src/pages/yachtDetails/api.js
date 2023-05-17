import api from '../../api';

export async function GetAYachtDetails(yachtID, brokerId, employeeId) {
  return await api(`/api/transportation/GetATObject?transportationObjectID=${yachtID}&employeeID=${employeeId}&brokerID=${brokerId}`)
}

export async function createLeads(employeeID, payload) {
  return await api(`/api/leads/CreateLeads?employeeID=${employeeID}`, payload, 'POST')
}

export async function createInquiries(employeeID, brokerID, location, locationID, friendlyName, payload) {
  return await api(`/api/inquiries/Web_TransportationObjectInquiries?brokerID=${brokerID}&employeeID=${employeeID}&location=${location}&locationID=${locationID}&transportationObjectFriendlyName=${friendlyName}`, payload, 'POST')
}

export async function contactPreferenceTypes() {
  return await api(`/api/leads/GetcontactPreferenceTypes`)
}