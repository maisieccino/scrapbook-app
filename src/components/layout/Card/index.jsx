import React from "react";
import PropTypes from "prop-types";

import "./card.css";

const Card = ({ children, title, buttons }) => (
  <div className="card">
    {title && <h1 className="card-title">{title}</h1>}
    {children}
    <div className="card-buttons">{buttons}</div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.node),
};

Card.defaultProps = {
  children: null,
  title: "",
  buttons: null,
};

export default Card;
export { default as BookmarkCard } from "./BookmarkCard";
