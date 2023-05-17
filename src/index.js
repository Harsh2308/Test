import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import "swiper/swiper.min.css";
import 'rc-slider/assets/index.css';
import "swiper/swiper-bundle.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import * as serviceWorker from './serviceWorker';


const MyApp = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<MyApp />, rootElement)
} else {
    ReactDOM.render(<MyApp />, rootElement)
}


serviceWorker.unregister();
