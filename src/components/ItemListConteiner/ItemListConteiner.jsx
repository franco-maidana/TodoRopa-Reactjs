import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data.response.docs))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((product, index) => (
          <div className="card mb-3" style={{ width: "18rem" }} key={index}>
            <img src={product.photo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-title">US${product.price}</h6>
              <h6 className="card-title">Stock: {product.stock}</h6>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListConteiner;
