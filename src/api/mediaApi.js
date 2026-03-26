import axios from "axios";
const UNSPLASE_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const UNSPLASE_URL = import.meta.env.VITE_UNSPLASE_URL;
const PEXELS_URL = import.meta.env.VITE_PEXELS_URL;

export async function fetchPhoto(query, page = 1, per_page = 20) {
  const response = await axios.get(UNSPLASE_URL, {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${UNSPLASE_KEY}`,
    },
  });
  return response.data;
}
export async function fetchVedio(query, page = 1, per_page = 15) {
  const response = await axios.get(PEXELS_URL, {
    params: { query, page, per_page },
    headers: {
      Authorization: PEXELS_KEY,
    },
  });
  return response.data;
}
