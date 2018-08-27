import React from "react";
import ControlCard from "./ControlCard";

const renderValidThru = number => {
  number = number.toString();
  return number.slice(0, 2) + "/" + number.slice(2);
};

const renderValidNumber = number => {
  number = number.toString();
  let rslt = "";

  for (let i = 0; i < number.length; i += 4)
    rslt += number.slice(i, i + 4) + " ";

  return rslt;
};

const RenderName = name => {
  name.name.toUpperCase();
};

function CreditCard(props) {
  return (
    <div>
      <div className="credit">
        <h1 className="creditNumber">{renderValidNumber(props.num)}</h1>
        <h2 className="ValidThru">{renderValidThru(props.date)}</h2>
        <h1 className="name">{RenderName(props.name)}</h1>
      </div>
      <input
        className="name"
        type="text"
        placeholder="enter your name"
        onChange="RenderName(value)"
      />
    </div>
  );
}
export default CreditCard;
