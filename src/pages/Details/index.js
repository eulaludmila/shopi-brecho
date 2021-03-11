/* eslint-disable eqeqeq */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CarouselItem from "../../components/CarouselItem";
import { Container } from "./style";
import itemsStore from "../../service/store";
import { CartContext } from "../../context/CartContext";
import { showToast } from "../../components/Toast";

function Details() {
  const { id } = useParams();
  const { reviewCart } = useContext(CartContext);
  const [item, setItem] = useState({});
  const [view, setView] = useState(false);

  useEffect(() => {
    const object = itemsStore.find((obj) => obj.id == id);
    setItem(object);
    setView(true);
  }, [id]);

  function handleBuy(info) {
    showToast({ message: "Adicionado ao carrinho com sucesso" });
    reviewCart(info);
  }

  return (
    <>
      {view ? (
        <>
          <Container>
            <div>
              <img src={item.img} alt="Calças" />
            </div>
            <div className="details">
              <h2>{item.name}</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
              <p className="oldPrice">
                {item.discount && `De ${item.oldPrice}`}
              </p>
              <p className="value">Por {item.price}</p>

              <div>
                {item.quantity !== item.stock ? (
                  <button type="button" onClick={() => handleBuy(item)}>
                    Comprar
                  </button>
                ) : (
                  <p className="stock">
                    Estamos sem estoque! Mas fique ligado que logo terá mais :)
                  </p>
                )}
              </div>
            </div>
          </Container>
          <CarouselItem />
        </>
      ) : (
        <div />
      )}
    </>
  );
}

export default Details;
