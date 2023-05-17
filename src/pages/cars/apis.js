import api from '../../api';

export async function getCars(brokerID) {
    return await api(`/api/transportation/GetTObjectList?brokerID=${brokerID}&tObjectTypeID=1&employeeID=1`)
}

export async function carsByMake(brokerID, employeeID, makeID) {
    return await api(`/api/transportation/GetTObjectListByMake?tObjectTypeID=1&employeeID=${employeeID}&brokerID=${brokerID}&makeID=${makeID}`)
}

export async function carsByModel(brokerID, employeeID, modelID) {
    return await api(`/api/transportation/GetTObjectListByModel?tObjectTypeID=1&employeeID=${employeeID}&brokerID=${brokerID}&modelID=${modelID}`)
}

export async function modelsByMake(makeID) {
    return await api(`/api/transportation/GetTObjectModelsByMake?objectTypeID=1&makeID=${makeID}`)
}

export async function getTransportationTypesData(brokerID) {
    return await api(`/api/transportation/GetTransportationTypesData?brokerID=${brokerID}&objectTypeID=1&locationID=3&transactionStatusID=1`)
}