import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import { emiOptions } from "../../mock/emi-options";
import BankEmi from "../routes/bank-emi";
import BrandEmi from "../routes/brand-emi";
import RetailerEmi from "../routes/retailer-emi";

const routes = emiOptions.map((option) => {
  switch (option.path) {
    case "bank-emi":
      return { path: "/bank-emi", component: BankEmi };
    case "brand-emi":
      return { path: "/brand-emi", component: BrandEmi };
    case "retailer-emi":
      return { path: "/retailer-emi", component: RetailerEmi };
  }
});

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      {routes.map((route) => (
        <route.component path={route.path} />
      ))}
    </Router>
  </div>
);

export default App;
