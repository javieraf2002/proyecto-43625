import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListaContainer from "./components/ItemListaContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Ticket from "./components/Ticket";
// import FireBase from "./db/FireBase";

function App() {
  return (
    
    <CartContextProvider>
    {/* Se hace solo un a ves para completar el invetario en Firebase  */}
    {/* <FireBase />   */}
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path={"/"} element={<ItemListaContainer />} />
          <Route path="/category/:categoria" element={<ItemListaContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/ticket/:id"} element={<Ticket />} />
          <Route path={"*"} element={<Error404 />} />
          
        </Routes>
        <Contacto />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;