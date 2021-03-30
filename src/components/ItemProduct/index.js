/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { Item } from "./style";
import price from "../../assets/images/price.svg";

function ItemProduct({ dados }) {
  const history = useHistory();

  function details(id) {
    history.push(`/details/${id}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Item
      onClick={() => {
        details(dados.id);
      }}
    >
      {dados.discount && <img className="price" src={price} alt="Price" />}
      <div className="image-product">
        <img src={dados.img} alt={dados.name} />
      </div>
      <div className="details">
        <h3>{dados.name}</h3>
        <h3 className="price">Por R${dados.price}</h3>
        <p>{dados.discount && `De R$${dados.oldPrice}`}</p>
        {dados.quantity !== dados.stock ? (
          <button type="button">Comprar</button>
        ) : (
          <p className="stock">Sem estoque!</p>
        )}
      </div>
    </Item>
  );
}

export default ItemProduct;
