import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container } from "./style";
import clothes from "../../assets/images/clothes.svg";
import { CartContext } from "../../context/CartContext";

export default function Minicart() {
  const { updateAmount, items, deleteItem } = useContext(CartContext);

  function handleAmount(id, type) {
    updateAmount(id, type);
  }
  function handleRemoverItem(id) {
    deleteItem(id);
  }

  return (
    <Container>
      {items.map((item) => (
        <div key={item.id} className="item">
          <div>
            <img src={clothes} alt="calça" />
          </div>
          <div className="description">
            <h3>{item.name}</h3>
            <div className="quantidade">
              {item.quantity !== 1 ? (
                <IoIosArrowBack
                  size={20}
                  onClick={() => {
                    handleAmount(item.id, "decrement");
                  }}
                />
              ) : (
                <IoIosArrowBack size={20} color="#c3c3c3" />
              )}
              <div className="number">{item.quantity}</div>
              {item.quantity !== item.stock ? (
                <IoIosArrowForward
                  size={20}
                  onClick={() => {
                    handleAmount(item.id, "increment");
                  }}
                />
              ) : (
                <IoIosArrowForward size={20} color="#c3c3c3" />
              )}
              <button
                type="button"
                className="remove"
                onClick={() => {
                  handleRemoverItem(item.id);
                }}
              >
                Remover
              </button>
            </div>
          </div>
          <div className="values">
            {item.discount && <span>${item.oldPrice}</span>}
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
