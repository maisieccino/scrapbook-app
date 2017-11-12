import React from "react";
import PropTypes from "prop-types";

import "./card.css";

const Card = ({ children, title }) => (
  <div className="card">
    {title && <h1 className="card-title">{title}</h1>}
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  title: "",
};

export default Card;
