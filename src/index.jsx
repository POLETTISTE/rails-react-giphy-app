import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";

import "../assets/stylesheets/application.scss";
import App from "./components/App/app";

const Hello = ({ name }) => {
  return <App />;
};

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<Hello name="Stéphane" />);
}
