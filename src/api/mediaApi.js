import axios from "axios";
const UNSPLASE_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const UNSPLASE_URL = import.meta.env.VITE_UNSPLASE_URL;
const PEXELS_URL = import.meta.env.VITE_PEXELS_URL;

export async function fetchPhoto(query) {
  if (!query.trim()) return [];
  const response = await axios.get(UNSPLASE_URL, {
    params: { query, page: 1, per_page: 20 },
    headers: {
      Authorization: `Client-ID ${UNSPLASE_KEY}`,
    },
  });
  return response.data;
}
export async function fetchvideo(query) {
  if (!query.trim()) return [];
  const response = await axios.get(PEXELS_URL, {
    params: { query, page: 1, per_page: 20 },
    headers: {
      Authorization: PEXELS_KEY,
    },
  });
  return response.data;
}
