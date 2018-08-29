import React from "react";

const renderValidNumber = number => {
  number = number.toString();
  let rslt = "";

  for (let i = 0; i < number.length; i += 4)
    rslt += number.slice(i, i + 4) + " ";

  return rslt;
};

function CreditCard(props) {
  return (
    <div>
      <div className="credit">
        <h1 className="creditNumber">{renderValidNumber(props.num)}</h1>
        <span className="ValidThru">{props.date}</span>
        <span className="cvc">{props.cvc}</span>
        <h1 className="nam">{props.nam}</h1>
      </div>
    </div>
  );
}
export default CreditCard;
