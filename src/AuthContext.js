import React, { createContext, useState, useEffect } from "react";
import { getEmplyeeId } from './authApi';
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";

export const AuthContext = createContext();
// This context provider is passed to any component requiring the context
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [brokerId, setBrokerId] = useState(localStorage.getItem('brokerId'));
  const [authToken, setAuthToken] = useState(localStorage.getItem('luxuri_token'));
  const [employeeId, setEmployeeId] = useState(localStorage.getItem('employeeId'));

  const authenticate = async () => {
    // localStorage.removeItem('luxuri_token')
    // getToken().then(resp => {
    //   console.log(resp, 'resp')
    //   localStorage.setItem('luxuri_token', resp.data.access_token);
    //   localStorage.setItem('brokerId', resp.data.brokerID);
    //   localStorage.setItem('expired', resp.data['.expires']);
    //   setBrokerId(resp.data.brokerID);
    //   setAuthToken(resp.data.access_token);
    // })

    let data = new URLSearchParams();
    data.append('username', "guestUserLU17a@woodendoorpm.com");
    data.append('password', "Agent123@luxuri");
    data.append('grant_type', "password");
    const { REACT_APP_API_URL } = process.env;

    await axios.post(`${REACT_APP_API_URL}/oauth/token`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((resp) => {
      console.log("Generated & setitng on local storage")
      localStorage.setItem('luxuri_token', resp.data.access_token);
      localStorage.setItem('brokerId', resp.data.brokerID);
      localStorage.setItem('expired', resp.data['.expires']);
      setBrokerId(resp.data.brokerID);
      setAuthToken(resp.data.access_token);
    }).catch((err) => {
      console.log(err, 'token api');
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    authenticate()
  }, []);

  useEffect(() => {
    if (brokerId != null && employeeId === null) {
      getEmplyeeId(brokerId)
        .then(empResp => {
          setEmployeeId(empResp.data.Data);
          localStorage.setItem('employeeId', empResp.data.Data);
        })
    }
  }, [brokerId, employeeId]);

  return (
    <AuthContext.Provider
      value={{
        brokerId,
        authToken,
        employeeId,
        setBrokerId,
        setAuthToken,
        setEmployeeId
      }}
    >
      <Helmet>
        <title>Hello</title>
      </Helmet>
      {isLoading ? (
        <div style={{
          width: '100vw', 
          height: '100vh', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Spinner />
      </div>
      ) : children}
    </AuthContext.Provider>
  );
};
