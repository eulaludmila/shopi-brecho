/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Item } from "./style";
import price from "../../assets/images/price.svg";
import { CartContext } from "../../context/CartContext";
import { showToast } from "../Toast";

function ItemProduct({ dados }) {
  const { reviewCart } = useContext(CartContext);
  const history = useHistory();

  function handleBuy(info) {
    showToast({ message: "Adicionado ao carrinho com sucesso" });
    reviewCart(info);
  }

  function details(id) {
    history.push(`/details/${id}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Item>
      {dados.discount && <img className="price" src={price} alt="Price" />}
      <div className="image-product">
        <img src={dados.img} alt={dados.name} />
      </div>
      <div className="details">
        <h3>{dados.name}</h3>
        <h3 className="price">Por {dados.price}</h3>
        <p>{dados.discount && `De ${dados.oldPrice}`}</p>
        {dados.quantity !== dados.stock ? (
          <button type="button" onClick={() => handleBuy(dados)}>
            Comprar
          </button>
        ) : (
          <p className="stock">Sem estoque!</p>
        )}
        <p
          onClick={() => {
            details(dados.id);
          }}
          className="details"
        >
          Detalhes
        </p>
      </div>
    </Item>
  );
}

export default ItemProduct;
