import React from "react";
import { ContainerHeader } from "./style";
import logo from "../../assets/images/ShopI.svg";

function Header() {
  return (
    <ContainerHeader>
      <div id="container">
        <div>
          <h1>
            A <img src={logo} alt="Logo" /> está com você
          </h1>
          <p>
            Venha nos conhecer e aproveitar os diversos looks e preços
            baixissímos
          </p>
        </div>
      </div>
    </ContainerHeader>
  );
}

export default Header;
