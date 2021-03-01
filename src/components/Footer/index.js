import React from "react";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiMapAlt } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { ContainerFooter } from "./style";

function Footer() {
  return (
    <ContainerFooter>
      <div id="container">
        <div className="container-telefone">
          <div>
            <AiOutlinePhone size={23} />
            (11) 95325-2531
          </div>
          <div>
            <BsPhone size={23} /> (11) 95325-2531
          </div>
        </div>
        <div className="container-endereco">
          <BiMapAlt size={23} />
          <p>Rua Almerinda de Castro, 193 - Repúplica / SP</p>
        </div>
        <div className="redes-sociais">
          <AiOutlineInstagram size={40} color="#ffffff" />
          <FaFacebookF size={25} color="#ffffff" />
        </div>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
