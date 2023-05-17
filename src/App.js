import React, { useEffect } from "react";
import Layout from 'common/layout';
import { history } from "./history";
import { AuthProvider } from './AuthContext';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter as Router } from "react-router-dom";

export class SplashScreen extends React.Component {
  render() {
    const styleob = {
      top: '50%',
      left: '50%',
      position: 'fixed',
      transform: 'translate(-50%, -50%)'
    };

    const { REACT_APP_PUBLIC_URL } = process.env;
    return (
      <img src={REACT_APP_PUBLIC_URL + '/images/loader2.svg'} style={styleob} alt='imgage' />
    );
  }
}

function App() {
  const { REACT_APP_BASENAME } = process.env;

  useEffect(() => {
    localStorage.removeItem('luxuri_token');
  }, []);

  return (
    <HttpsRedirect>
      <AuthProvider>
        <Router history={history} basename={REACT_APP_BASENAME}>
          <React.Suspense fallback={<SplashScreen />}>
            <Layout />
          </React.Suspense>
        </Router>
      </AuthProvider>
    </HttpsRedirect>
  );
}
export default App;