import axios from "axios";

export const getRestaurantList = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("language", "en_US");
  encodedParams.set("location_id", "297704");
  encodedParams.set("currency", "USD");
  encodedParams.set("offset", pageParam.toString());

  const options = {
    method: "POST",
    url: "https://worldwide-restaurants.p.rapidapi.com/search",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RAPID_API_HOST,
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
