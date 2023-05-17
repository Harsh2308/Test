import React, { useState } from "react";
import moment from "moment";
import { urlData } from "common/urlData";
import SearchVillasDate from "./searchVillasDate";
import SearchVillasGuests from "./searchVillasGuests";
import SearchVillasPlaces from "./searchVillasPlaces";
import { useHistory, useLocation } from "react-router-dom";

const Index = ({
  fromNavbar,
  fromFooter,
  setSearchModalState,
  location,
  selectCity,
  selectDate,
  checkInDate,
  checkOutDate,
  setSelectGuests,
  setCitiesFormPayload,
  listModalScreenActive,
}) => {
  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const noOfGuest = query.get("noOfGuest");
  const [btnText, setBtnText] = useState("Skip");
  const [searchData, setSearchData] = useState({});
  const [activePeriod, setActivePeriod] = useState(null)
  const [searchBarScreenActive, setSearchBarScreenActive] = useState(
    listModalScreenActive || 1
  );
  const {
    lowerValue,
    upperValue,
    guestCount,
    startDate,
    endDate,
    scrollPosition,
    sort,
  } = urlData;

  const handleData = (item) => {
    setActivePeriod(item)
  }


  const handlePreviousScreen = () => {
    setSearchData({});
    document.querySelector("body").style.overflow = "auto";
    if (searchBarScreenActive === 1) {
      setSearchModalState(false);
      return setSearchBarScreenActive(searchBarScreenActive);
    }
    setSearchBarScreenActive(searchBarScreenActive - 1);
  };

  const handleNextScreen = () => {
    if (searchBarScreenActive === 1 && searchData.hasOwnProperty("place")) {
      setBtnText("Skip");
      setSearchBarScreenActive(searchBarScreenActive + 1);
    } else if (searchBarScreenActive === 2) {
      if (selectDate) {
        setSearchModalState(false);
        document.querySelector("body").style.overflow = "auto";
        const checkInDate = searchData.startDate || startDate;
        const checkOutDate = searchData.endDate || endDate;
        setCitiesFormPayload((prevState) => ({
          ...prevState,
          startDate: moment(checkInDate).format("YYYY/MM/DD"),
          endDate: moment(checkOutDate).format("YYYY/MM/DD"),
        }));
        let city = location;
        let locationId =
          city === "Miami"
            ? 3
            : city === "Aspen"
            ? 1
            : city === "Fort-lauderdale"
            ? 6
            : 1;

        if (city === "Miami") {
          city = "miami-vacation-homes";
        } else if (city === "Aspen") {
          city = "aspen-vacation-homes";
        } else {
          city = "fort-lauderdale-vacation-homes";
        }

        const redirectUrl = `?noOfGuest=${noOfGuest}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&location=${locationId}&locationName=${location}&scrollPosition=${scrollPosition}&activePeriod=${activePeriod}`;
        history.push({
          pathname: `${city}`,
          search: redirectUrl,
          state: { flexible: searchData.flexible, value: searchData.value },
        });
        return;
      }

      const place = searchData.place;
      let city = place;
      setSearchModalState(false);
      document.querySelector("body").style.overflow = "auto";
      const checkInDate = searchData.startDate || startDate;
      const checkOutDate = searchData.endDate || endDate;
      let locationId =
        city === "Miami"
          ? 3
          : city === "Aspen"
          ? 1
          : city === "Fort-lauderdale"
          ? 6
          : 1;

      if (city === "Miami") {
        city = "miami-vacation-homes";
      } else if (city === "Aspen") {
        city = "aspen-vacation-homes";
      } else {
        city = "fort-lauderdale-vacation-homes";
      }

      const redirectUrl = `?noOfGuest=${guestCount}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${locationId}&locationName=${place}&scrollPosition=${scrollPosition}&activePeriod=${activePeriod}`;
      history.push({
        pathname: `/${city}`,
        search: redirectUrl,
        state: { flexible: searchData.flexible, value: searchData.value },
      });
    } else {
      setSearchModalState(false);
    }
  };

  const handleCloseModal = () => {
    setSearchModalState(false);
    document.querySelector("body").style.overflow = "auto";
  };

  const handleBackButton = () => (
    <button
      type="button"
      className="back-btn"
      onClick={() => handlePreviousScreen()}
    >
      Back
    </button>
  );
  const handleNextButton = () => (
    <button
      type="button"
      className="next-btn"
      onClick={() => handleNextScreen()}
    >
      {btnText}
    </button>
  );
  const handleLeftArrowIcon = () => (
    <img
      onClick={() => handlePreviousScreen()}
      className="left-icon"
      src="images/leftWhiteArrow.svg"
      alt="modal-leftArrow-icon"
    />
  );
  const handleCrossIcon = () => (
    <img
      onClick={handleCloseModal}
      className="cross-icon"
      src="images/modelCrossIconWhite.svg"
      alt="modal-cross-icon"
    />
  );

  return (
    <div>
      {searchBarScreenActive === 1 ? (
        <SearchVillasPlaces
          selectCity={selectCity}
          searchData={searchData}
          setBtnText={setBtnText}
          fromNavbar={fromNavbar}
          fromFooter={fromFooter}
          setSearchData={setSearchData}
          handleCrossIcon={handleCrossIcon}
          handleNextButton={handleNextButton}
          setSearchModalState={setSearchModalState}
          handleLeftArrowIcon={handleLeftArrowIcon}
          searchBarScreenActive={searchBarScreenActive}
          setSearchBarScreenActive={setSearchBarScreenActive}
        />
      ) : searchBarScreenActive === 2 ? (
        <SearchVillasDate
          selectDate={selectDate}
          searchData={searchData}
          setBtnText={setBtnText}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          setSearchData={setSearchData}
          handleCrossIcon={handleCrossIcon}
          handleBackButton={handleBackButton}
          handleNextButton={handleNextButton}
          handleLeftArrowIcon={handleLeftArrowIcon}
          searchBarScreenActive={searchBarScreenActive}
          handleData={handleData}
        />
      ) : (
        searchBarScreenActive === 3 && (
          <SearchVillasGuests
            handleCrossIcon={handleCrossIcon}
            setSelectGuests={setSelectGuests}
            setsearchModalState={setSearchModalState}
            setCitiesFormPayload={setCitiesFormPayload}
            searchBarScreenActive={searchBarScreenActive}
            selectDate={selectDate}
            searchData={searchData}
            setBtnText={setBtnText}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setSearchData={setSearchData}
            handleBackButton={handleBackButton}
            handleNextButton={handleNextButton}
            handleLeftArrowIcon={handleLeftArrowIcon}
            handleData={handleData}
            />
        )
      )}
    </div>
  );
};

export default Index;
