import React from "react";
import Header from "../../components/Header";
import { ContainerSobre } from "./style";
import CarouselItem from "../../components/CarouselItem";
import imgSobre from "../../assets/images/sobre.svg";
import FormNews from "../../components/FormNews";
import logo from "../../assets/images/ShopI-Logo.svg";
import brecho from "../../assets/images/brecho.svg";

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
              A ShopI nasceu em 2020 a fim de revender roupas usadas e até mesmo
              novas com um preço mais acessível e de atacado.
            </p>
            <p>
              A Co-Fundadora iniciou o segu negócio na garagem de casa apenas
              com roupas de seu guarda-roupa, a medida que foi sendo
              compratilhado nas redes sociais, principalmente o Instagram, a
              loja começou a ter uma clientela fiel e aumentar a lucratividade
              em 70%.
            </p>
          </div>
          <img src={imgSobre} alt="Closet" />
          <div className="area-texto">
            <h2>
              <img src={brecho} alt="ShopI" className="logo" />
            </h2>
            <p>
              Como de início as estilo de roupas foram sendo um padrão do
              armário da fundadora, ao aumentar a clientela e muitos pedidos dos
              clientes foram feitas as pesquisas de estilos mais pedidos e a
              Shopi expandiu seu armário com novos estilos de roupas, estando
              conforme a moda.
            </p>
          </div>
        </div>
      </ContainerSobre>
      <FormNews />
    </>
  );
}

export default Home;
