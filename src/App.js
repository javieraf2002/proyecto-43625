import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListaContainer from "./components/ItemListaContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListaContainer />} />
        <Route path="/category/:categoria" element={<ItemListaContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Contacto/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;