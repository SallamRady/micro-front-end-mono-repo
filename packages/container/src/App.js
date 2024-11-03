import React from "react";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider,createGenerateClassName } from "@material-ui/core";


const generateClassName = createGenerateClassName({
  productionPrefix:'container'
})
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
