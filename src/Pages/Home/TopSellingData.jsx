import axios from "axios";

export const topFood = () => {
  return axios
    .get("http://localhost:3000/recipes?sortOrder=dsc")
    .then((response) => response.data);
};
