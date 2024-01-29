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
import SingleProduct from "./components/SingleProduct";

function App() {
  let products = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ContextProvider>
      <Nav onOpen={handleShow}></Nav>
      <Heading></Heading>
      <main>
        <Routes>
          <Route
            path="/products/:productId"
            element={<SingleProduct arr={products}></SingleProduct>}
          ></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/"
            element={<ProductCard arr={products}></ProductCard>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
        </Routes>
      </main>

      <Cart onClose={handleClose} onOpen={handleShow} current={show}></Cart>
    </ContextProvider>
  );
}

export default App;
