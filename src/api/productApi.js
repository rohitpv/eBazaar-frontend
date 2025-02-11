import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend API URL if different
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await api.get("/products"); // Update with your correct API endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const filterProducts = async (query) => {
  // actual axios call to fetch products
  try {
    const response = await axios.post('http://localhost:5000/api/openai', {
      prompt: query
    });
    // console.log(response)
    console.log(response.data)
    // console.log("resp in productAPI",response.choices[0].message.content);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default api;
