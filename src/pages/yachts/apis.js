import api from '../../api';

export async function getYachts(brokerID) {
    return await api(`/api/transportation/GetTObjectList?brokerID=${brokerID}&tObjectTypeID=2&employeeID=1`)
}