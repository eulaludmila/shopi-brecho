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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna.
          </p>
        </div>
      </div>
    </ContainerHeader>
  );
}

export default Header;
