import React from "react";
import { YachtStyledSlider } from "./style";
import { useHistory } from "react-router-dom";

const Index = ({ data }) => {
  const history = useHistory();
  const yachtName = data.friendlyName.replaceAll(" ", "-");

  const openDetailsPage = (name) => {
    history.push({
      pathname: `/yacht-details/${name}`,
      state: { id: data.transportationObjectID },
    });
  };

  const minTimeHour = () => {
    const fourHourRate = data.fourHourRate;
    const sixHourRate = data.sixHourRate;
    const eightHourRate = data.eightHourRate;
    var minTime = "";

    if (fourHourRate !== null) {
      minTime = "4 hrs";
    } else if (sixHourRate !== null) {
      minTime = "6 hrs";
    } else if (eightHourRate !== null) {
      minTime = "8 hrs";
    } else {
      minTime = "1 hrs";
    }
    return minTime;
  };

  return (
    <YachtStyledSlider onClick={() => openDetailsPage(yachtName)}>
      <div className="yachtStyledSlide_image">
        <img
          src={data.imageFilePath || "images/yachtimages/yachtcard1.png"}
          alt="yacht"
        />
      </div>
      <div className="yachtStyledSlide_body">
        <div className="yachtStyledSlide_body_header">
          <div className="yachtStyledSlide_body_header_title">
            <h3>{data.friendlyName}</h3>
            <p>
              ${data.hourlyRate?.toLocaleString("en-US")}
              <span>/hour</span>{" "}
            </p>
          </div>
        </div>
        <div className="yachtStyledSlide_body_data">
          <div className="yachtStyledSlide_body_data_box">
            <p>{data.numberOfSeats}</p>
            <p>Guests</p>
          </div>
          <div className="yachtStyledSlide_body_data_box">
            <p>{minTimeHour()}</p>
            <p>Min time</p>
          </div>
        </div>
      </div>
    </YachtStyledSlider>
  );
};

export default Index;
