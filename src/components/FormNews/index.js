/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Container } from "./style";

function FormNews() {
  return (
    <Container>
      <h2>NewsLetter</h2>
      <h3>
        Quer saber das novidades e estar por dentro da tendência? Se cadastre
        abaixo :)
      </h3>

      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Container>
  );
}

export default FormNews;
