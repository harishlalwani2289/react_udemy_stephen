import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pdBPytEHG4Qzq9jv_xJnXSYJmYKN8jYJhTnG1eHve14",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
