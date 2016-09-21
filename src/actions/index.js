import GoogleMaps from '@google/maps';
const API_KEY = 'AIzaSyDLHrCGSCyk2ruYtiY8CTs6-FD2D2W6v3g';
const googleMapsClient = GoogleMaps.createClient({
  key: API_KEY
});

export const FETCH_PLACES = 'FETCH_PLACES'
export function fetchPlaces(query) {
  const request = googleMapsClient.places({
    query,
    type: 'restaurant',
  }).asPromise();
  console.log(request);
  return {
    type: FETCH_PLACES,
    payload: request
  }
}
