import ReactGA from 'react-ga';

function TrackPage(pageName) {
    const { REACT_APP_GOOGLE_ANALYTICS_STATUS } = process.env;
    if (REACT_APP_GOOGLE_ANALYTICS_STATUS === '1') {
        ReactGA.pageview(pageName);
    }
}

export default TrackPage;