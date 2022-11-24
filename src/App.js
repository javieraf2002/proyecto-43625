import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import itemListContainer from "./components/itemListContainer";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      <NavBar />
      <itemListContainer titulo={"Lista de productos"}/>
      <Contacto/>
      <Footer />
    </div>
  );
}

export default App;
