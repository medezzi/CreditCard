import React from "react";
import Creditcard from "./Creditcard";

class App extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        number: "0123456789101112",
        date: "",
        cardname: "",
        cvc: ""
      };
    }
  }
  handleChangeNumber(event) {
    let cardNumber = event.target.value;
    let rslt = "";
    if (cardNumber.length > 16) cardNumber = cardNumber.slice(0, 16);
    for (let i = 0; i < cardNumber.length; i += 4)
      rslt += cardNumber.slice(i, i + 4) + " ";
    this.setState({ number: cardNumber });
  }
  handleChangeName(event) {
    let cardName = event.target.value;
    cardName = cardName.replace(/[^a-zA-Z]/g, "").toUpperCase();
    this.setState({ cardname: cardName });
  }
  handleChangeDate(event) {
    let cardDate = event.target.value.replace(/[^0-9]/g, "");
    let month = cardDate.slice(0, 2);
    let year = cardDate.slice(2, 4);
    if (cardDate.length > 4) {
      cardDate = cardDate.slice(0, 3);
    }

    if (month > 12) month = 12;
    if (30 < year) year = 30;
    //if (18 > year) year = 18;
    cardDate = month + "/" + year;
    this.setState({ date: cardDate });
  }

  handleChangeCVC(e) {
    let cardCVC = e.target.value;
    if (cardCVC.length > 3) {
      cardCVC = cardCVC.slice(0, 3);
    }
    this.setState({ cvc: cardCVC });
  }

  render() {
    return (
      <div>
        <input
          className="cardname"
          type="text"
          placeholder="enter your name"
          onChange={this.handleChangeName.bind(this)}
          value={this.state.cardname}
        />
        <input
          className="number"
          type="number"
          placeholder="enter your credit card number"
          value={this.state.number}
          onChange={this.handleChangeNumber.bind(this)}
        />

        <input
          className="date"
          type="text"
          placeholder="MM/YY"
          value={this.state.date}
          onChange={this.handleChangeDate.bind(this)}
        />
        <input
          className="cvccode"
          type="number"
          placeholder="CVC"
          onChange={this.handleChangeCVC.bind(this)}
          value={this.state.cvc}
        />
        <Creditcard
          date={this.state.date}
          num={this.state.number}
          nam={this.state.cardname}
          cvc={this.state.cvc}
        />
      </div>
    );
  }
}

export default App;
