import React from "react";
import ReactGA from "react-ga";
import Footer from "../footer";
import Navbar from "../navbar/navbar";
import GoToTop from "../../hooks/GoToTop";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";

const Index = () => {
  const { REACT_APP_GOOGLE_ANALYTICS_STATUS, REACT_APP_GOOGLE_ANALYTICS_CODE } = process.env;
  if (REACT_APP_GOOGLE_ANALYTICS_STATUS === "1") { ReactGA.initialize(REACT_APP_GOOGLE_ANALYTICS_CODE) }

  const HomepageComponent = React.lazy(() => import("../../pages/home/Homepage"));
  const ListingComponent = React.lazy(() => import("../../pages/listing/Listing"));
  const PropertyDetailsComponent = React.lazy(() => import("../../pages/propertyDetails/PropertyDetails"));
  const CarsComponent = React.lazy(() => import("../../pages/cars/Cars"));
  const YachtsComponent = React.lazy(() => import("../../pages/yachts/Yachts"));
  const CarDetailsComponent = React.lazy(() => import("../../pages/carDetails/CarDetailPage"));
  const YachtDetailsComponent = React.lazy(() => import("../../pages/yachtDetails/YachtDetailPage"));
  const AboutUsComponent = React.lazy(() => import("../../pages/aboutUs/AboutUs"));
  const ConciergeComponent = React.lazy(() => import("../../pages/concierge/ConciergePage"));
  const ContactUsComponent = React.lazy(() => import("../../pages/contactUs/ContactUs"));

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/property-details/:city/:name' component={PropertyDetailsComponent} />
        <Route path='/luxury-car-rentals-miami' component={CarsComponent} />
        <Route path='/luxury-yacht-rentals-miami' component={YachtsComponent} />
        <Route path='/car-details/:name' component={CarDetailsComponent} />
        <Route path='/yacht-details/:name' component={YachtDetailsComponent} />
        <Route path='/luxuri-realtors' component={AboutUsComponent} />
        <Route path='/concierge-services' component={ConciergeComponent} />
        <Route path='/contact-luxuri-team' component={ContactUsComponent} />
        <Route exact path="/:city" component={ListingComponent} />
        {/* <Route path='/success' component={SuccessComponent} /> */}
        {/* <Route path='/miami-home-rental-inquiry' component={MiamiSuccessComponent} /> */}
        {/* <Route path='/fort-lauderdale-rental-inquiry' component={MiamiSuccessComponent} /> */}
        {/* <Route path='/aspen-home-rental-inquiry' component={MiamiSuccessComponent} /> */}
        {/* <Route path='/washington-dc-home-rental-inquiry' component={MiamiSuccessComponent} /> */}
        {/* <Route path='/los-angeles-home-rental-inquiry' component={MiamiSuccessComponent} /> */}
        {/* <Route path='/miami-car-rental-inquiry' component={CarSuccessComponent} /> */}
        {/* <Route path='/miami-yacht-rental-inquiry' component={YachtSuccessComponent} /> */}
        {/* <Route path='/concierge-service-inquiry' component={ConciergeSuccessComponent} /> */}
        {/* <Redirect
          exact
          from=""
          // to={`/city/${window.location.pathname.split("/")[1]}`}
        /> */}
      </Switch>
      <GoToTop />
      <Footer />
      <ToastContainer
        draggable
        rtl={false}
        theme='dark'
        closeOnClick
        pauseOnHover
        hideProgressBar
        autoClose={3000}
        pauseOnFocusLoss
        newestOnTop={false}
        position='top-right'
      />
    </React.Fragment>
  );
}

export default Index;