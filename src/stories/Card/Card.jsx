import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

export const Card = ({
  src,
  alt,
  title,
  copy,
  description,
  price,
  currency,
  transparent,
  actionText,
}) => (
  <div className={`card${transparent ? " card--transparent" : ""}`}>
    <img className="card__image" src={src} alt={alt} />

    <div className="card__content">
      <h3 className="title"> {title}</h3>
      <p className="copy"> {copy}</p>
    </div>

    <div className="card__price-description">
      <p className="description">{description}</p>
    </div>

    <div className="card__price">
      <p className="price">{price}</p>
      <p className="currency">{currency}</p>
    </div>

    <div className="card__actions">
      <button className="action-link">{actionText}</button>
    </div>
  </div>
);

Card.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  copy: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  transparent: PropTypes.bool,
  actionText: PropTypes.string,
};

Card.defaultProps = {
  src: "https://expertus.ee/wp-content/uploads/2019/02/placeholder-16.9.jpg",
  alt: "Alt goes here",
  title: "Lorem ipsum dolor",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  description: "Room starting at",
  price: 100,
  currency: "$",
  transparent: false,
  actionText: "Find out more",
};
