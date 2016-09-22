const API_KEY = 'AIzaSyB2Zf7JBuMAsncTfAS3dtbplesXEipQweE';
const ROOT_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}`

export const FETCH_PLACES = 'FETCH_PLACES'
export function fetchPlaces(query) {
  const url = `${ROOT_URL}&type=restaurant&keyword=${query}`;
  const request = fetch(url, {
    method: 'get'
  });
  return {
    type: FETCH_PLACES,
    payload: request
  }
}
