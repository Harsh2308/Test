import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { urlData } from "common/urlData";
import MapComponent from "./MapComponent";
import SliderCard from "common/sliderCard";
import RangePicker from "common/rangePicker";
import Skeleton from "@mui/material/Skeleton";
import GalleryModal from "common/galleryModal";
import SearchModal from "common/searchModalScenario";
import ExploreMoreCities from "../exploreMoreCities";
import SimilarProductSlider from "../similarProductSlider";
import { useHistory, useLocation } from "react-router-dom";
import { getMatchedEnquiries, getPropertiesByLocation } from "./apis";
import { ListingPage, ListingPageBanner, SimilarProperty } from "./style";
import { Box, CircularProgress } from "@mui/material";

const {
  lowerValue,
  upperValue,
  guestCount,
  startDate,
  endDate,
  scrollPosition,
  sort,
} = urlData;

const Index = () => {
  const history = useHistory();
  const location = useLocation();
  const cityVacation = location.pathname.split("/")[1];
  const place = cityVacation.split("-")[0];
  const capitalizePlace = place && place[0].toUpperCase() + place.slice(1);
  const locationId =
    capitalizePlace === "Miami"
      ? 3
      : capitalizePlace === "Aspen"
      ? 1
      : capitalizePlace === "Fort"
      ? 6
      : 1;
  const query = new URLSearchParams(location.search);
  const city = query.get("locationName");
  const noOfGuest = query.get("noOfGuest");
  const checkInDate = query.get("checkInDate");
  const checkOutDate = query.get("checkOutDate");
  const activePeriod = query.get("activePeriod" || 0);
  const redirectUrl = `?noOfGuest=${noOfGuest || guestCount}&checkInDate=${
    checkInDate || startDate
  }&checkOutDate=${
    checkOutDate || endDate
  }&location=${locationId}&locationName=${capitalizePlace}&scrollPosition=${scrollPosition}&activePeriod=${activePeriod}`;

  const [mapCenter, setMapCenter] = useState();
  const [selectDate, setSelectDate] = useState();
  const brokerId = localStorage.getItem("brokerId");
  const [showDates, setShowDates] = useState(false);
  const [selectGuests, setSelectGuests] = useState();
  const [citiesData, setCitiesData] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const employeeId = localStorage.getItem("employeeId");
  const [cityBannerImage, setCityBannerImage] = useState(null);
  const [similarProperty, setSimilarProperty] = useState(null);
  const [searchModalState, setSearchModalState] = useState(false);
  const [rangePickerModal, setRangePickerModal] = useState(false);
  const [cityBannerHeading, setCityBannerHeading] = useState(null);
  const [listModalScreenActive, setListModalScreenActive] = useState(0);
  const [showSimilarProperty, setShowSimilarProperty] = useState(false);
  const [citiesFormPayload, setCitiesFormPayload] = useState({
    startDate: checkInDate || startDate,
    endDate: checkOutDate || endDate,
    minBudget: lowerValue,
    maxBudget: upperValue,
    numberOfGuests: noOfGuest || guestCount,
  });

  let value = null;
  let flexible = false;

  if (location.state) {
    flexible = location.state.flexible;
    value = location.state.value;
  }

  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });

  const moveToTheEnd = (newArr) => {
    newArr.map((elem, index) => {
      if (elem.displayWebMinimumNights === 1) {
        newArr.splice(index, 1);
        // newArr.push(elem);
        newArr.unshift(elem);
      }
    });
    return newArr;
  };

  const navigateToPropertyDetails = (sliderDetail) => {
    let dsp = sliderDetail.dsp;
    let city = sliderDetail.location;
    const locationId = sliderDetail.locationID;
    const selectedPropertyID = sliderDetail.propertyID;
    const propertyFriendlyName = sliderDetail.propertyFriendlyName.replaceAll(
      " ",
      "-"
    );

    if (city === "Miami") {
      city = "miami-vacation-homes";
    } else if (city === "Aspen") {
      city = "aspen-vacation-homes";
    } else {
      city = "fort-lauderdale-vacation-homes";
    }
    history.push({
      pathname: `/property-details/${city}/${propertyFriendlyName}`,
      search: ``,
      state: { brokerId, selectedPropertyID, dsp, locationId },
    });
  };

  const handleListModal = (value) => {
    if (value === "city") {
      setListModalScreenActive(1);
      setSearchModalState(!searchModalState);
    } else if (value === "date") {
      setListModalScreenActive(2);
      setSearchModalState(!searchModalState);
    } else if (value === "guests") {
      setListModalScreenActive(3);
      setSearchModalState(!searchModalState);
    }
  };

  const handleCitiesSelectionItem = () => {
    return (
      <div className="cities_city_selection_content_data">
        <div
          className="cities_city_selection_content_data_left"
          onClick={() => handleListModal("city")}
        >
          <p>{city === "Fort" ? "Fort-lauderdale" : city}</p>
          <div></div>
        </div>
        <div className="cities_city_selection_content_data_right">
          <div
            className="cities_city_selection_content_data_right_one"
            onClick={() => handleListModal("guests")}
          >
            <h6>Guests</h6>
            <p>{selectGuests}</p>
            <div></div>
          </div>
          <div
            className="cities_city_selection_content_data_right_two"
            onClick={() => handleListModal("date")}
          >
            <h6>Dates</h6>
            <p>{selectDate}</p>
            <div></div>
          </div>
        </div>
      </div>
    );
  };

  const verifyDate = useCallback(() => {
    if (checkInDate === startDate && checkOutDate === endDate) {
      setSelectDate("Select Dates");
      setShowSimilarProperty(false);
      setShowDates(false);
    } else {
      const startDate = moment(checkInDate).format("MMM DD");
      const endDate = moment(checkOutDate).format("MMM DD");
      setShowSimilarProperty(true);
      const dateString = `${startDate} - ${endDate}`;
      setSelectDate(dateString);
      setShowDates(true);
    }
  }, [checkInDate, checkOutDate]);

  const verifyGuests = useCallback(() => {
    if (noOfGuest > 1) {
      setSelectGuests(`${noOfGuest} Guests`);
      return;
    }
    setSelectGuests(width <= 520 ? "No. of Guests" : "Number of Guests");
  }, [noOfGuest, width]);
  const getCitiesData = useCallback(() => {
    if (flexible) {
      getPropertiesByLocation(brokerId, locationId)
        .then((res) => {
          const data = res.data.Data
          if(activePeriod == "1"){
            const filterData = data.filter((item)=> item.minimumNightStay <= 29)
            setCitiesData(filterData)
            return
          }
          else if (activePeriod == "2") {
            const filterData = data.filter((item)=>item.minimumNightStay > 29)
            setCitiesData(filterData)
            return
          }else{
            setCitiesData(res.data.Data)
          }
          
        })
        .catch((err) => console.log(err));
    } else {
      getMatchedEnquiries(brokerId, locationId, employeeId, citiesFormPayload)
        .then((res) => {
          console.log(res, "::::");
         
          setCitiesData(res.data.Data.webExactMatchedInquiryResults);
          setSimilarProperty([
            ...res.data.Data.webFuzzyMatchedInquiryResults,
            ...res.data.Data.additionalPropertiesByLocation,
          ]);
          const exactProp = res.data.Data.webExactMatchedInquiryResults;
          const avgLat =
            exactProp?.reduce((sum, city) => sum + city.latitude, 0) /
            exactProp?.length;
          const avgLng =
            exactProp?.reduce((sum, city) => sum + city.longitude, 0) /
            exactProp?.length;
          setMapCenter({ lat: avgLat, lng: avgLng });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [brokerId, locationId, employeeId, citiesFormPayload, flexible,activePeriod]);

  useEffect(() => {
    if (capitalizePlace === "Miami") {
      history.push({
        pathname: `/${cityVacation}`,
        search: redirectUrl,
        state: { flexible: flexible && flexible, value: value },
      });
    } else if (capitalizePlace === "Aspen") {
      history.push({
        pathname: `/${cityVacation}`,
        search: redirectUrl,
        state: { flexible: flexible && flexible, value: value },
      });
    } else if (capitalizePlace === "Fort") {
      history.push({
        pathname: `/${cityVacation}`,
        search: redirectUrl,
        state: { flexible: flexible && flexible, value: value },
      });
    }
  }, [capitalizePlace, cityVacation, history, redirectUrl, flexible, value]);

  useEffect(() => {
    verifyDate();
    verifyGuests();
    getCitiesData();

    if (city === "Miami") {
      setCityBannerImage("images/miamiBanner.png");
      setCityBannerHeading("Miami Vacation Homes");
    } else if (city === "Aspen") {
      setCityBannerImage("images/aspenBanner.png");
      setCityBannerHeading("Aspen Vacation Homes");
    } else if (city === "Fort-lauderdale" || city === "Fort") {
      setCityBannerImage("images/fortBanner.png");
      setCityBannerHeading("Fort Lauderdale Vacation Homes");
    }

    return () => {
      setMapCenter(null);
      setCitiesData(null);
      setSimilarProperty(null);
    };
  }, [city, getCitiesData, verifyDate, verifyGuests]);


  return (
    <ListingPage>
      {searchModalState && (
        <SearchModal
          location={city}
          selectCity={city}
          selectDate={selectDate}
          setSelectGuests={setSelectGuests}
          setSearchModalState={setSearchModalState}
          setCitiesFormPayload={setCitiesFormPayload}
          listModalScreenActive={listModalScreenActive}
          checkOutDate={
            selectDate === "Select Dates" ? null : citiesFormPayload.endDate
          }
          checkInDate={
            selectDate === "Select Dates" ? null : citiesFormPayload.startDate
          }
        />
      )}
      <ListingPageBanner bgImage={cityBannerImage}>
        <div className="cities_city_selection_content">
          <div className="cities_city_selection_content_heading">
            <h1>{cityBannerHeading}</h1>
          </div>
          {handleCitiesSelectionItem()}
        </div>
      </ListingPageBanner>
      <div className="listingPageResults">
        <div className="listingPageResults_content">
          <div className="listingPageResults_content_cities">
            <h1>{citiesData?.length} Results</h1>
            <div className="listingPageResults_content_cities_cards">
              {!citiesData ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                citiesData?.map((data) => {
                  return (
                    <SliderCard
                      clicked={navigateToPropertyDetails}
                      key={data.propertyID}
                      sliderDetail={data}
                      showDates={showDates}
                    />
                  );
                })
              )}
            </div>
            {showSimilarProperty && (
              <SimilarProperty>
                <div className="similarProperty_heading">
                  <h1>Similar Dates</h1>
                  <p>
                    {similarProperty?.length < 10
                      ? `0${similarProperty?.length}`
                      : similarProperty?.length}{" "}
                    Results
                  </p>
                </div>
                <div className="similarProperty_cards">
                  {similarProperty?.map((data) => (
                    <SliderCard
                      clicked={navigateToPropertyDetails}
                      key={data.propertyID}
                      sliderDetail={data}
                      showDates={showDates}
                    />
                  ))}
                </div>
                <div className="similarProperty_slider">
                  <SimilarProductSlider
                    sliderDetail={similarProperty}
                    showDates={showDates}
                  />
                </div>
              </SimilarProperty>
            )}
          </div>
          <div className="listingPageResults_content_map">
            <MapComponent
              mapCenter={mapCenter}
              citiesData={citiesData}
              mapElement={
                <div style={{ height: `100%`, paddingBottom: `50px` }} />
              }
              loadingElement={<div style={{ height: `100%` }} />}
              navigateToPropertyDetails={navigateToPropertyDetails}
              containerElement={<div style={{ height: `813px` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDCuH-bD1fKC44XaDmAxi0yUzH_-1Gzb4&v=3.exp&libraries=geometry,drawing,places"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <ExploreMoreCities value={city} />
      </div>

      <GalleryModal
        customStyle="none"
        viewPhotosModalHandler={rangePickerModal}
        setViewPhotosModalHandler={setRangePickerModal}
      >
        <RangePicker
          rangeValue={citiesFormPayload}
          setRangeValue={setCitiesFormPayload}
        />
      </GalleryModal>
    </ListingPage>
  );
};

export default Index;
