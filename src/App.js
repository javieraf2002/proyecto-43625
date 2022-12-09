import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import itemListContainer from "./components/itemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<itemListContainer />} />
        <Route path={"/category/:categoria"} element={<itemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Contacto/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;