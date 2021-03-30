import React from "react";
import "react-multi-carousel/lib/styles.css";
import Routes from "./service/routes";
import ToastAnimated from "./components/Toast";

function App() {
  return (
    <>
      <ToastAnimated />
      <Routes />
    </>
  );
}

export default App;
