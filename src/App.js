import "./App.css";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ContextProvider from "./context/contextProvider";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ContextProvider>
      <Nav onOpen={handleShow}></Nav>
      <Heading></Heading>
      <main>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<ProductCard></ProductCard>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
        </Routes>
      </main>

      <Cart onClose={handleClose} onOpen={handleShow} current={show}></Cart>
    </ContextProvider>
  );
}

export default App;
