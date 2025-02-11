import { useEffect, useState } from "react";
import { fetchProducts, filterProducts } from "../api/productApi";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { Container } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };

    loadProducts();
  }, []);

  const handleSearch = async(query) => {
    console.log("qqqqq",query);
    const response=await filterProducts(query);
    console.log("response in HOME",response);
    setProducts(response);
    setFilteredProducts(response);

    // state setting here

    // const filtered = products.filter(
    //   (item) =>
    //     item.title.toLowerCase().includes(query.toLowerCase()) || // Adjust key names as per API
    //     item.id.toString().includes(query) // Search by ID
    // );
    // setFilteredProducts(filtered);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <div className="container" style={{ marginTop: '16px' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
