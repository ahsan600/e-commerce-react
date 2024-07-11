import React, { useState } from "react";
import "./products.css";
import data from "/src/DemoData/newProduct.json";
import Card from "../Card/Card";
function Products() {
  const [productData, setProductData] = useState(data);
  const [sliceData, setSliceData] = useState(10);
  const [searchProductData, setSearchProductData] = useState([]);
  //Next 10 Product
  const nextProduct = () => {
    setSliceData(sliceData + 10);
  };
  //Search the Product 
  const HandleSearchChange = (e) => {
    const searchProduct = productData.filter((item) =>
      item.productTitle.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchProductData(searchProduct);
  };
 

  //Filter the product by 15%, 30%, 40%, 50%
  const handleFilterChange = (e) => {
    let sortProduct = [...productData];
    setSearchProductData(
      sortProduct.filter((item) => item.discount === e.target.value)
    );
  };
  //Sort by the product High_to_low,Low_to_High and Alphabetically
  const handleSortChange = (e) => {
    let sortProduct =searchProductData.length === 0? [...productData]: [...searchProductData];

    switch (e.target.value) {
      case "high_low":
        sortProduct.sort((a, b) => b.productPrice - a.productPrice);
        break;
      case "A_Z":
        sortProduct.sort((a, b) =>
          a.productTitle.localeCompare(b.productTitle)
        );
        break;
      case "low_high":
        sortProduct.sort((a, b) => a.productPrice - b.productPrice);
        break;
      default:
        break;
    }

    if (searchProductData.length === 0) {
      setProductData(sortProduct);
    } else {
      setSearchProductData(sortProduct);
    }
  };

  return (
    <div className="container">
      <div className="searchProduct">
        <input
          type="text"
          placeholder="Search Product"
          onChange={HandleSearchChange}
        />
      </div>
      <div className="filterProduct">
        <div className="leftFilter d-flex">
          <div>
            <p className="d-inline">Sort By:</p>
          </div>
          <select
            defaultValue={"none"}
            className="form-select form-select-lg mb-1"
            aria-label=".form-select-lg example"
            onChange={handleFilterChange}
          >
            <option value="">New Arrival</option>
            <option value="15% off">15% off</option>
            <option value="30% off">30% off</option>
            <option value="40% off">40% off</option>
            <option value="50% off">50% off</option>
          </select>
        </div>
        <div className=" d-flex">
          <div>
            <p className="d-inline">Sort By:</p>
          </div>
          <select
            defaultValue={"none"}
            className="form-select form-select-lg mb-1"
            aria-label=".form-select-lg example"
            onChange={handleSortChange}
          >
            <option value="low_high">Low to High</option>
            <option value="A_Z">Alphabetical A to Z</option>
            <option value="high_low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="products">
        {(searchProductData.length === 0 ? productData : searchProductData)
          .slice(0, sliceData)
          .map((data) => (
            <Card
              key={data.id}
              id={data.id}
              productTitle={data.productTitle}
              productImages={data.productImages[0]}
              productPrice={data.productPrice}
              discount={data.discount}
            />
          ))}
      </div>
      <div className="pagination">
        {((productData.length > sliceData && searchProductData.length > 10) ||
          searchProductData.length === 0) && (
          <button className="btn btn-danger" onClick={nextProduct}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
