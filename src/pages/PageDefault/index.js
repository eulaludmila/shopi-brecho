import React from "react";
import { Main, Page } from "./style";

// Página padrão com objetivo de deixar sempre o menu da parte debaixo do site
// eslint-disable-next-line react/prop-types
const PageDefault = ({ children, paddingAll }) => (
  <Page>
    <Main paddingAll={paddingAll}>{children}</Main>
  </Page>
);

export default PageDefault;
