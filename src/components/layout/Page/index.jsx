import React from "react";
import PropTypes from "prop-types";

import "./page.css";

const Page = ({ children, className, title, ...rest }) => (
  <div className={`page ${className}`} {...rest}>
    {title && <h1 className="title">{title}</h1>}
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

Page.defaultProps = {
  children: <div />,
  className: "",
  title: "",
};

export default Page;
