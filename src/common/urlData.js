import moment from "moment";

const lowerValue = 0;
const guestCount = 1;
const now = new Date();
const scrollPosition = 0;
const upperValue = 2000000;
// let locationName = window.location.pathname.split("/")[1];
// const place = locationName.split("-")[0]
// let capitalize = place && place[0].toUpperCase() + place.slice(1);

export const urlData = {
    // place,
    lowerValue,
    upperValue,
    // locationId,
    // capitalize,
    guestCount,
    // locationName,
    scrollPosition,
    startDate: moment(now).format("Y-MM-DD"),
    endDate: moment(now).add(3, "d").format("Y-MM-DD"),
    sort: lowerValue < upperValue ? 'price_low_to_high' : 'price_high_to_low'
}