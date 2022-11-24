import React from "react";
import Banners from "./components/Banners";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";

const Pepe = () => {
  return (
    <h3>Lisado de productos</h3>
  )
};

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={"Bienvenidos al Mercado de Frutas!"} comp1={<Pepe/>}/>
      <Banners />
      <Promocion />
      <Footer />
    </div>
  );
}

export default App;
