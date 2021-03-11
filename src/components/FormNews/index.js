/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ContainerReceived } from "./style";
import shema from "./validation";

function FormNews() {
  const [received, setReceived] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(shema),
  });

  function onSubmit() {
    setReceived(true);
  }

  return received ? (
    <ContainerReceived>
      <h2>NewsLetter</h2>
      <h3>
        Obrigado por se cadastrar! Estamos muito contente com você junto com a
        gente :)
      </h3>
    </ContainerReceived>
  ) : (
    <Container>
      <h2>NewsLetter</h2>
      <h3>
        Quer saber das novidades e estar por dentro da tendência? Se cadastre
        abaixo :)
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" ref={register} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" ref={register} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Container>
  );
}

export default FormNews;
