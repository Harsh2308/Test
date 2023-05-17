import React from "react";
import { urlData } from "common/urlData";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory, useLocation } from "react-router-dom";
import {
  ExploreMoreCities,
  ExploreCityWebCard,
  ExploreCityMobileCard,
} from "./style";

const { lowerValue, upperValue, scrollPosition, sort } = urlData;

const Index = ({ value }) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const checkInDate = query.get("checkInDate");
  const checkOutDate = query.get("checkOutDate");
  const noOfGuest = query.get("noOfGuest");

  const handleCity = (city) => {
    const place = city;
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

    const redirectUrl = `?noOfGuest=${noOfGuest}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${locationId}&locationName=${place}&scrollPosition=${scrollPosition}`;
    history.push({
      pathname: `${city}`,
      search: redirectUrl,
      state: { flexible: false, value: null },
    });
  };

  const getCity = () => {
    if (value === "Miami") {
      return (
        <React.Fragment>
          <ExploreCityWebCard
            bgImage="images/aspenBanner.png"
            onClick={() => handleCity("Aspen")}
          >
            <h1>Aspen</h1>
            <div className="cityBG"></div>
          </ExploreCityWebCard>
          <ExploreCityWebCard
            bgImage="images/fortBanner.png"
            onClick={() => handleCity("Fort-lauderdale")}
          >
            <h1>Fort Lauderdale</h1>
            <div className="cityBG"></div>
          </ExploreCityWebCard>
        </React.Fragment>
      );
    } else if (value === "Aspen") {
      return (
        <React.Fragment>
          <ExploreCityWebCard
            bgImage="images/miamiBanner.png"
            onClick={() => handleCity("Miami")}
          >
            <h1>Miami</h1>
            <div className="cityBG"></div>
          </ExploreCityWebCard>
          <ExploreCityWebCard
            bgImage="images/fortBanner.png"
            onClick={() => handleCity("Fort-lauderdale")}
          >
            <h1>Fort Lauderdale</h1>
            <div className="cityBG"></div>
          </ExploreCityWebCard>
        </React.Fragment>
      );
    } else if (value === "Fort-lauderdale" || value === "Fort") {
      return (
        <React.Fragment>
          <ExploreCityWebCard
            bgImage="images/miamiBanner.png"
            onClick={() => handleCity("Miami")}
          >
            <h1>Miami</h1>
            <div className="cityBG"></div>
          </ExploreCityWebCard>
          <ExploreCityWebCard
            bgImage="images/aspenBanner.png"
            onClick={() => handleCity("Aspen")}
          >
            <h1>Aspen</h1>
            <div className="cityBG"></div>
          </ExploreCityWebCard>
        </React.Fragment>
      );
    }
  };
  const getMBCity = () => {
    if (value === "Miami") {
      return (
        <React.Fragment>
          <SwiperSlide>
            <ExploreCityMobileCard bgImage="images/aspenBanner.png"  onClick={() => handleCity("Aspen")}>
              <h1>Aspen</h1>
            </ExploreCityMobileCard>
          </SwiperSlide>
          <SwiperSlide>
            <ExploreCityMobileCard bgImage="images/fortBanner.png"  onClick={() => handleCity("Fort-lauderdale")}>
              <h1>Fort Lauderdale</h1>
            </ExploreCityMobileCard>
          </SwiperSlide>
        </React.Fragment>
      );
    } else if (value === "Aspen") {
      return (
        <React.Fragment>
        <SwiperSlide>
            <ExploreCityMobileCard bgImage="images/miamiBanner.png" onClick={() => handleCity("Miami")}>
              <h1>Miami</h1>
            </ExploreCityMobileCard>
          </SwiperSlide>
          <SwiperSlide>
            <ExploreCityMobileCard bgImage="images/fortBanner.png" onClick={() => handleCity("Fort-lauderdale")}>
              <h1>Fort Lauderdale</h1>
            </ExploreCityMobileCard>
          </SwiperSlide>
        </React.Fragment>
      );
    } else if (value === "Fort-lauderdale" || value === "Fort") {
      return (
        <React.Fragment>
          <SwiperSlide>
            <ExploreCityMobileCard bgImage="images/miamiBanner.png" onClick={() => handleCity("Miami")}>
              <h1>Miami</h1>
            </ExploreCityMobileCard>
          </SwiperSlide>
          <SwiperSlide>
            <ExploreCityMobileCard bgImage="images/aspenBanner.png" onClick={() => handleCity("Aspen")}>
              <h1>Aspen</h1>
            </ExploreCityMobileCard>
          </SwiperSlide>
        </React.Fragment>
      );
    }
  };

  return (
    <ExploreMoreCities>
      <div className="exploreMoreCity_title">
        <h1>Explore More Cities</h1>
      </div>
      <div className="exploreMoreCity_web">{getCity()}</div>
      <div className="exploreMoreCity_mobile">
        <Swiper
          spaceBetween={16}
          navigation={false}
          slidesPerView={1.1}
          modules={[Navigation, Pagination]}
          className="similarProductSlider"
        >
          {/* <SwiperSlide>
                        <ExploreCityMobileCard bgImage='images/aspenBanner.png'>
                            <h1>Aspen</h1>
                        </ExploreCityMobileCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExploreCityMobileCard bgImage='images/fortBanner.png'>
                            <h1>Fort Lauderdale</h1>
                        </ExploreCityMobileCard>
                    </SwiperSlide> */}
          {getMBCity()}
        </Swiper>
      </div>
    </ExploreMoreCities>
  );
};

export default Index;
