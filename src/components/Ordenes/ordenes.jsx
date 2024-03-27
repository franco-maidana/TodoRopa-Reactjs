import { useState, useEffect } from "react";
import axios from "axios";

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>aca van todas las ordenes</h2>
    </>
  );
};

export default Ordenes;
