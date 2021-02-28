import React from "react";
import { Item } from "./style";
import clothes from "../../assets/images/clothes.svg";
import price from "../../assets/images/price.svg";

function ItemProduct() {
  return (
    <Item>
      <img className="price" src={price} alt="Price" />
      <div className="image-product">
        <img src={clothes} alt="Clothes" />
      </div>
      <div className="details">
        <h3>Calças</h3>
        <h3>Por R$30,00</h3>
        <p>De R$20,00</p>
        <button type="button">Comprar</button>
      </div>
    </Item>
  );
}

export default ItemProduct;
