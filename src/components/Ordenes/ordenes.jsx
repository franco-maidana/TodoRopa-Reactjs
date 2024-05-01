import { useState, useEffect } from "react";
import axios from "axios";

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    // Recuperar el token de localStorage
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8080/api/orders")
      .then((res) => {
        // Actualiza el estado ordenes con los datos recibidos
        setOrdenes(res.data.response.docs);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Acá van todas las órdenes</h2>
      <div>
        {ordenes.map((order, index) => {
          return (
            <div key={index}>
              <p>User ID: {order.user_id._id}</p>
              <p>User ID: {order.user_id.name}</p>
              <p>Email: {order.user_id.email}</p>
              <p>Products ID: {order.products_id._id}</p>
              <p>title: {order.products_id.title}</p>
              <p>Quantity: {order.quantity}</p>
              <p>price: UDS$ {order.products_id.price}</p>
              <p>State: {order.state}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ordenes;
