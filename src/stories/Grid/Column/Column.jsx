import React from "react";
import PropTypes from "prop-types";

export const Column = ({ xsm, sm, md, lg, xlg, children }) => {
  let classes = "grid-col";

  const breakpoints = {
    xsm: xsm,
    sm: sm,
    md: md,
    lg: lg,
    xlg: xlg,
  };
  for (const key in breakpoints) {
    const span = breakpoints[key];
    if (typeof span === "number") {
      classes += ` col-${key}-${span}`;
    }
  }

  return <div className={classes}>{children}</div>;
};

Column.propTypes = {
  xsm: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xlg: PropTypes.number,
  children: PropTypes.node.isRequired,
};
