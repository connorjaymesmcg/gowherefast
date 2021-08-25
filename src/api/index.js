import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    // Desctruct data from API call
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': '217896d594msh5665c9f95fd52dep156d04jsn2dcbe40d838a',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
