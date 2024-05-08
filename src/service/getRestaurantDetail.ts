import axios from "axios";

export const getRestaurantDetail = async (
  id: string
): Promise<RestaurantDetail | undefined> => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("currency", "USD");
  encodedParams.set("language", "en_US");
  encodedParams.set("location_id", id);

  const options = {
    method: "POST",
    url: "https://worldwide-restaurants.p.rapidapi.com/detail",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RAPID_API_HOST,
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
