import React from "react";

function ControlCard(props) {
  return (
    <div className="">
      <input
        className="cardname"
        type="text"
        maxLength="20"
        placeholder="enter your name"
        onChange={props.changeName}
        value={props.ValueName}
      />
      <input
        className="number"
        type="number"
        placeholder="enter your credit card number"
        value={props.ValueNumber}
        onChange={props.changeNumber}
      />

      <input
        className="date"
        type="text"
        placeholder="MM/YY"
        value={props.ValueDate}
        onChange={props.changeDate}
      />
      <input
        className="cvccode"
        type="number"
        placeholder="CVC"
        onChange={props.changeCVC}
        value={props.ValueCVC}
      />
    </div>
  );
}
export default ControlCard;
