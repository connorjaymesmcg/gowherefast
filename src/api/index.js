import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-key': '217896d594msh5665c9f95fd52dep156d04jsn2dcbe40d838a',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  },
};

export const getPlacesData = async () => {
  try {
    // Desctruct data from API call
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

