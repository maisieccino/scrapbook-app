import React from "react";
import PropTypes from "prop-types";
import { generate } from "shortid";
import NavItem from "./NavItem";

import "./navigation.css";

const Navigation = ({ routes }) => (
  <nav className="navbar">
    {routes
      .filter(route => route.navigation)
      .map(route => <NavItem key={generate()} {...route} />)}
  </nav>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()),
};

Navigation.defaultProps = {
  routes: [],
};

export default Navigation;
