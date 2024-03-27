import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx";
import Inicio from "./components/inicio/inicio.jsx";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner.jsx";
import NuevoProducto from "./components/AgregarProductoNuevo/AgregarProductoNnuevo.jsx";
import Ordenes from "./components/Ordenes/ordenes.jsx";
import Registro from "./components/Registro/Registro.jsx";
import Login from "./components/InicioDeSession/InicioDeSession.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<ItemListConteiner />} />
          <Route path="/products/real" element={<NuevoProducto />} />
          <Route path="/orders" element={<Ordenes />} />
          <Route path="/users/register" element={<Registro />} />
          <Route path="/users/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
