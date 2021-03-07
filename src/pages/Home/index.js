import React from "react";
import Header from "../../components/Header";
import { ContainerSobre } from "./style";
import CarouselItem from "../../components/CarouselItem";
import imgSobre from "../../assets/images/sobre.svg";
import FormNews from "../../components/FormNews";
import logo from "../../assets/images/ShopI-Logo.svg";

function Home() {
  return (
    <>
      <Header />
      <CarouselItem />
      <ContainerSobre>
        <div className="container">
          <div className="area-texto">
            <h2>
              <img src={logo} alt="ShopI" className="logo" />
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Maecenas porttitor congue massa. Fusce posuere, magna sed
              pulvinar pulvinar pulvinar ultricies, purus lectus malesuada
              libero, sit commodo magna eros quis urna.Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Maecenas porttitor congue
              massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus
              malesuada libero, sit amet commodo magna eros quis urna.
            </p>
          </div>
          <img src={imgSobre} alt="Closet" />
          <div className="area-texto">
            <h2>
              <img src={logo} alt="ShopI" className="logo" />
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Maecenas porttitor congue massa. Fusce posuere, magna sed
              pulvinar pulvinar pulvinar ultricies, purus lectus malesuada
              libero, sit commodo magna eros quis urna.Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Maecenas porttitor congue
              massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus
              malesuada libero, sit amet commodo magna eros quis urna.
            </p>
          </div>
        </div>
      </ContainerSobre>
      <FormNews />
    </>
  );
}

export default Home;
