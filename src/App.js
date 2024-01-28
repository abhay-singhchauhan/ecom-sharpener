import "./App.css";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import ProductCart from "./components/ProductCard";
import Cart from "./components/Cart";
import ContextProvider from "./context/contextProvider";
import About from "./components/About";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <ProductCart></ProductCart>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ContextProvider>
      <Nav onOpen={handleShow}></Nav>
      <Heading></Heading>
      <RouterProvider router={routers}></RouterProvider>
      <Cart onClose={handleClose} onOpen={handleShow} current={show}></Cart>
    </ContextProvider>
  );
}

export default App;
