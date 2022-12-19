import React from "react";
import PropTypes from "prop-types";

export const Row = ({ children }) => {
  return <div className="grid-row">{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
