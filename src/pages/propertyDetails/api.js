import api from '../../api';

export async function GetAPropertyDetails(propertyID, slug) {
  slug = slug.replaceAll('-', ' ');
  return await api(`/api/properties/GetAPropertyDetails?propertyID=${propertyID}&propertyFriendlyName=${slug}`)
}

export async function getPropertiesByLocation(brokerID, locationId) {
  return await api(`/api/properties/GetPropertiesByLocation?brokerID=${brokerID}&locationID=${locationId}`)
}

export async function getPropertyCalendarEvents(propertyID, firstDate, lastDate) {
  return await api(`/api/properties/Web_GetPropertyCalendarEvents?propertyID=${propertyID}&firstDate=${firstDate}&lastDate=${lastDate}`)
}

export async function morePropertiesLike(brokerID, locationId, selectedPropertyID, payload, dsp) {
  return await api(`/api/inquiries/Web_MorePropertiesLike?brokerID=${brokerID}&dsp=${dsp}&fuzzyDays=0&fuzzyGuests=0&locationID=${locationId}&selectedPropertyID=${selectedPropertyID}`, payload, 'PUT')
}

export async function createLeads(employeeID, payload) {
  return await api(`/api/leads/CreateLeads?employeeID=${employeeID}`, payload, 'POST')
}

export async function createInquiries(employeeID, brokerID, location, locationID, propertyFriendlyName, payload) {
  return await api(`/api/inquiries/Web_CreateInquiries?brokerID=${brokerID}&employeeID=${employeeID}&location=${location}&locationID=${locationID}&propertyFriendlyName=${propertyFriendlyName}`, payload, 'POST')
}

export async function contactPreferenceTypes() {
  return await api(`/api/leads/GetcontactPreferenceTypes`)
}