import React from "react";
import PropTypes from "prop-types";

import "./card-stack.css";

const CardStack = ({ children }) => (
  <div className="card-stack">{children}</div>
);

CardStack.propTypes = {
  children: PropTypes.node,
};

CardStack.defaultProps = {
  children: null,
};

export default CardStack;
