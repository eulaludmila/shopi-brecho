import React from "react";
import { Main, Page } from "./style";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

// Página padrão com objetivo de deixar sempre o menu da parte debaixo do site
// eslint-disable-next-line react/prop-types
const PageDefault = ({ children, paddingAll }) => (
  <Page>
    <Menu />
    <Main paddingAll={paddingAll}>{children}</Main>
    <Footer />
  </Page>
);

export default PageDefault;
