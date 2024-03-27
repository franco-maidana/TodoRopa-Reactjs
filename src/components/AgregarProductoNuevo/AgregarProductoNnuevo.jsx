import React, { useState } from "react";
import axios from "axios";

//REVISAR BACKEND NO FUNCIONAN LAS RUTAS

const NuevoProducto = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleCreateProduct = async () => {
    try {
      const data = {
        title,
        photo,
        price,
        stock,
      };
      console.log(data);
      const response = await axios
        .post("http://localhost:8080/api/products", data)
        .then((response) => {
          console.log("ESTO ES RESPONSE", response);
          return response; // Asegúrate de devolver la respuesta para que esté disponible fuera del then
        })
        .catch((error) => console.log(error));
  
      // Verificar si la respuesta es exitosa (código de estado 2xx)
      if (response && response.status === 200) { // Asegúrate de verificar si response no es undefined
        console.log(response.data);
        // Mostrar el mensaje de la respuesta
        alert(response.data.message);
        // Realizar acciones basadas en la respuesta, como redirigir si hay una sesión
        if (response.data.session) {
          // Hacer algo, como redirigir a la página de productos
          // Ejemplo: window.location.replace("/products");
        }
      } else {
        // Si la respuesta no es exitosa, lanzar un error
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${response.data.message}`
        );
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  

  return (
    <>
      <main className="flex-grow-1 p-3 m-auto my-2 d-flex w-100">
        <section className="w-50 bg-light">
          <h3 style={{ color: "black" }}>Products</h3>
          <article id="productos" className="d-flex flex-wrap"></article>
        </section>
        <section className="w-50">
          <form
            className="w-50 m-auto my-5"
            onSubmit={(e) => e.preventDefault()} // Evita la recarga de página al enviar el formulario
          >
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Photo" className="form-label">
                Photo
              </label>
              <input
                type="text"
                className="form-control"
                id="Photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCreateProduct}
            >
              Create Products
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default NuevoProducto;
