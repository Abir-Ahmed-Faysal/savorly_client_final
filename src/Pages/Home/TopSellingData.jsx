import axios from "axios";

export const topFood = () => {
  return axios
    .get("https://savorly-lime.vercel.app/recipes?sortOrder=dsc")
    .then((response) => response.data);
};
