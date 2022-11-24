import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={"Lista de productos"}/>
      <Contacto/>
      <Footer />
    </div>
  );
}

export default App;
