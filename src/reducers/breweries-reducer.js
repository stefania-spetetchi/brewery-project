import { FETCH_BREWERY } from "../actions";

const breweryReducer = function (state = [], action) {

  switch (action.type) {
    case FETCH_BREWERY:
      return action.payload.map(function (b) {
        return {
          id: b.id || '',
          name: b.name || '',
          type: b.brewery_type || '',
          address: b.street || '',
          city: b.city || '',
          state: b.state || '',
          ZipCode: b.postal_code || '',
          phone: b.phone || '',
          website: b.website_url || '',
        }
      });
    default: return state;
  }
}

export default breweryReducer;