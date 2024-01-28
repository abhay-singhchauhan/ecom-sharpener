import Context from "./context";
import { useState } from "react";

const Provide = (props) => {
  const [items, setItems] = useState([]);
  let amount = 0;
  items.map((ele) => {
    amount += +ele.price;
  });
  const obj = {
    items: items,
    totalAmount: amount,
    addItem: AddToCart,
    removeItem: removeFromCart,
  };
  function AddToCart(item) {
    let exists = false;
    items.map((ele) => {
      if (ele.id === item.id) {
        exists = true;
        alert("Item alerady exists");
      }
    });
    if (!exists) {
      setItems([...items, item]);
    }
  }
  function removeFromCart(item) {
    let arr = items.filter((ele) => {
      if (ele.id === item.id) {
        return false;
      } else {
        return true;
      }
    });
    setItems(arr);
  }
  console.log(obj.items);
  return <Context.Provider value={obj}>{props.children}</Context.Provider>;
};

export default Provide;
