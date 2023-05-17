import api from "../../api";

export async function getPropertiesByLocation(brokerID, locationId) {
  return await api(
    `/api/properties/GetPropertiesByLocation?brokerID=${brokerID}&locationID=${locationId}`
  );
}

export async function getMatchedEnquiries(
  brokerID,
  locationId,
  employeeID,
  payload
) {
  return await api(
    `/api/inquiries/Web_MatchedInquiries?brokerID=${brokerID}&employeeID=${employeeID}&fuzzyDays=1&fuzzyGuests=0&locationID=${locationId}`,
    payload,
    "PUT"
  );
}

export async function morePropertiesLike(
  brokerID,
  locationId,
  selectedPropertyID,
  payload,
  dsp
) {
  return await api(
    `/api/inquiries/Web_MorePropertiesLike?brokerID=${brokerID}&dsp=${dsp}&fuzzyDays=0&fuzzyGuests=0&locationID=${locationId}&selectedPropertyID=${selectedPropertyID}`,
    payload,
    "PUT"
  );
}

export async function getLocationData(url, payload) {
  return await api(url, payload, "PUT");
}

export async function httpFeaturedProperty(borkerId, locationId) {
  return await api(
    `/api/properties/GetFeaturedPropertiesByLocation?brokerID=${borkerId}&locationID=${locationId}`,
    "GET"
  );
}
