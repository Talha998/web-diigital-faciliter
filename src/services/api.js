const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  return response.json();
};
