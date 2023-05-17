import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_URL,
    // headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    // }
});

// const requestHandler = request => {
//     const token = 'mgjPN3ogk__YDi0RqUZKitKNSBkajhmoZSgL4hgAvT8jEKxfiP9XYuoqzyWzNLhvzJP2WdNBP-G6QKWXbtLp3CzraqBBOVlYk49KQvPiJxeSA1YlqldJk-KDyUiGmkqFMrY8lgT1DBSOZARVqRDR1u04NWdDD7F67LqINWsmIeyBvkYLhYIyh9Vwgk_fh_t8X8ebxC74xVf-vtK9GKaOFtnZ2PyQsKK3oN023vftlpNPfRsg-wGh5zA1u4bayin4QaM-SklFDGRJLbT8JgTRxwffoqRsl_ae7H_GpBgshjHOHg-L1YMupmZQamnjZxnz084zOFz-vIUKVrAFqutd2rndFPfKH4QZiKiVhDLgoaVNqcZoUGBHOwT2ydCtvIc_0k0AKR_K8Nu2ihhH6UgTw4Vr5_PNeBxR7bk4WUUrA2NlpUC3LvXSqVlrQyXnRnoWMPJcceeMpMIvoYsb7IB3L6D2FuGE0YD9S9tAndamjsImYsk-vvykgHW-w946R5x9eqTgjYPKwWO9fU1tZw4plWDb4j4Fyka1ImCzb8ln0jcpIpvQXfXNYDIj6DKPiHQRiFxoWzrPG_vivMb-PVZfpAxkF0jzYLbVeaZANG23gfw'
//     let headers = {
//         "Content-Type": "application/x-www-form-urlencoded"
//     };
//     if (token !== null) {
// headers = {
//     "Content-Type": "application/json; charset=utf-8"
// };
//         headers.Authorization = `Bearer ${token}`;
//     }
//     request.headers = headers;
//     return request;
// };

const requestHandler = request => {
    const token = localStorage.getItem('luxuri_token');
    let headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    };

    if (token !== null) {
        headers = {
            "Content-Type": "application/json; charset=utf-8"
        };
        headers.Authorization = `Bearer ${token}`;
    }

    request.headers = headers;
    return request;
};

const responseHandler = response => {
    return response;
};

const errorHandler = (error) => {
    return Promise.reject(error.response);
};

instance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

instance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default instance;