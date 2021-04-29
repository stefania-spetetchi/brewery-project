import axios from 'axios';

export const FETCH_BREWERIES = "FETCH_BREWERIES";
export const FETCH_BREWERY = "FETCH_BREWERY";
export const ADD_COMMENT = "ADD_COMMENT";

const ROOT_URL = "https://api.openbrewerydb.org/breweries"

export async function fetchBreweries(city = 'apex') {
  const request = await axios.get(`${ROOT_URL}?by_city=${encodeURIComponent(city)}`);

  return {
    type: FETCH_BREWERIES,
    payload: request.data
  }
}

export async function fetchBreweryById(id) {
  const request = await axios.get(`${ROOT_URL}/${id}`);

  return {
    type: FETCH_BREWERY,
    payload: request.data
  }
}

export function addComment(values) {
  // const comment = [{values}]

  return {
    type: ADD_COMMENT,
    payload: values
  }
}