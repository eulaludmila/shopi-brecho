/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const CartContext = createContext(null);
const { Provider } = CartContext;

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(dados) {
    dados.quantity = 1;
    setItems([...items, dados]);
  }

  function updateAmount(id, type) {
    const index = items.findIndex((item) => item.id === id);

    if (type === "increment") {
      items[index].quantity += 1;
    } else {
      items[index].quantity -= 1;
    }

    setItems([...items]);
  }

  function deleteItem(id) {
    const indexItem = items.findIndex((item) => item.id === id);
    items.splice(indexItem, 1);
    setItems([...items]);
  }

  function reviewCart(dados) {
    if (items.length === 0) {
      addItem(dados);
      return false;
    }
    const find = items.findIndex((item) => item.id === dados.id);
    if (find === -1) {
      addItem(dados);
    } else {
      updateAmount(dados.id, "increment");
    }
    return false;
  }

  return (
    <Provider value={{ reviewCart, items, deleteItem, updateAmount }}>
      {children}
    </Provider>
  );
}
