import { createContext } from "react";

const Context = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default Context;
