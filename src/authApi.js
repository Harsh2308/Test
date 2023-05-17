import api from './api';

export function getToken() {
    let data = new URLSearchParams();
    data.append('username', "guestUserLU17a@woodendoorpm.com");
    data.append('password', "Agent123@luxuri");
    data.append('grant_type', "password");
    return api("/oauth/token", data, 'post');
}

export async function getEmplyeeId(brokerID) {
    return await api(`/api/brokers/GetWebUserEmployeeIDByBroker?brokerID=${brokerID}&webUser=guestUserLU17a`, {}, 'GET');
}