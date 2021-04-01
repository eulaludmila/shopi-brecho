import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
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

ItemProduct.propTypes = {
  dados: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      discount: PropTypes.bool.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
    }).isRequired
  ),
};
ItemProduct.defaultProps = {
  dados: {},
};

export default ItemProduct;
