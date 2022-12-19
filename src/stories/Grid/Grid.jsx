import React from "react";
import PropTypes from "prop-types";
import "./grid.scss";

export const Grid = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
