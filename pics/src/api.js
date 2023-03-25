import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pdBPytEHG4Qzq9jv_xJnXSYJmYKN8jYJhTnG1eHve14",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
