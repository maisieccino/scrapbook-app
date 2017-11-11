import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";

import "./NavItem.css";

const NavItem = ({ path, icon, label, exact }) => (
  <NavLink to={path} exact={exact} activeClassName="active">
    {icon}
    <span>{label}</span>
  </NavLink>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavItem.defaultProps = {
  icon: <Icon.Home />,
  exact: false,
};

export default NavItem;
