import api from '../../api';

export async function propertyHeroes(brokerID) {
    return await api(`/api/properties/GetHeros?brokerID=${brokerID}&heroTypeID=1`)
}

export async function getMatchedEnquiries(brokerID, locationId, employeeID, payload) {
    return await api(`/api/inquiries/Web_MatchedInquiries?brokerID=${brokerID}&employeeID=${employeeID}&fuzzyDays=0&fuzzyGuests=0&locationID=${locationId}`, payload, 'PUT')
}

export async function httpFeaturedProperty(borkerId, locationId) {
    return await api(`/api/properties/GetFeaturedPropertiesByLocation?brokerID=${borkerId}&locationID=${locationId}`, 'GET')
}

export async function carHeroes(brokerID) {
    return await api(`/api/properties/GetHeros?brokerID=${brokerID}&heroTypeID=2`)
}

export async function yatchHeroes(brokerID) {
    return await api(`/api/properties/GetHeros?brokerID=${brokerID}&heroTypeID=3`)
}

export async function getLocations(brokerID) {
    return await api(`/api/properties/GetLocations?brokerID=${brokerID}`)
}

export async function getBrokerReviews(employeeID, brokerID) {
    return await api(`/api/brokers/GetAllBrokerReviews?employeeID=${employeeID}&brokerID=${brokerID}`)
}

export async function getBrokerInstagram(employeeID, brokerID) {
    return await api(`/api/brokers/GetAllBrokerInstagrams?brokerID=${brokerID}&employeeID=${employeeID}`)
}

export async function getCars(brokerID) {
    return await api(`/api/transportation/GetTObjectList?brokerID=${brokerID}&tObjectTypeID=1&employeeID=1`)
}

export async function getYachts(brokerID) {
    return await api(`/api/transportation/GetTObjectList?brokerID=${brokerID}&tObjectTypeID=2&employeeID=1`)
}