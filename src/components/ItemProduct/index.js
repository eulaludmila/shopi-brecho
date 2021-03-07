/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Item } from "./style";
import clothes from "../../assets/images/clothes.svg";
import price from "../../assets/images/price.svg";
import { CartContext } from "../../context/CartContext";
import { showToast } from "../Toast";

function ItemProduct({ dados }) {
  const { reviewCart } = useContext(CartContext);

  function handleBuy(info) {
    showToast({ message: "Adicionado ao carrinho com sucesso" });
    reviewCart(info);
  }

  return (
    <Item>
      {dados.discount && <img className="price" src={price} alt="Price" />}
      <div className="image-product">
        <img src={clothes} alt="Clothes" />
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
        <Link to={`/details/${dados.id}`} className="details">
          Detalhes
        </Link>
      </div>
    </Item>
  );
}

export default ItemProduct;
