import React, { useState } from "react";

import "./Card.css";

function Card ({
  name,
  price,
  priceTextHigh,
  priceTextLow,
  speed,
  condition,
  color,
  backgroundColor,
  isSelected,
}) {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  }

      let classCard;
      classCard = checked? "selected": "";

    return (

      <div onClick={handleChange} className={`card ${classCard}`}>
        <div className="card-name" style={{ backgroundColor: color }}>
          {name}
        </div>
        <div className="card-price" style={{ backgroundColor: backgroundColor }}>
          <span className="priceTextHigh">{priceTextHigh}</span>
          <span className="price">{price}</span>
          <span className="priceTextLow">{priceTextLow}</span>
        </div>

        <div className="card-speed">{speed}</div>
        <div className="card-condition">{condition}</div>
      </div>
    );
  }

export default Card;