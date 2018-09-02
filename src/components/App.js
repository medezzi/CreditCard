import React from "react";
import Creditcard from "./Creditcard";
import ControlCard from "./ControlCard";

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
    this.setState({ number: cardNumber });
  }
  handleChangeName(event) {
    let cardName = event.target.value;
    cardName = cardName.replace(/[^a-zA-Z ]/g, "").toUpperCase();

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
        <ControlCard
          changeDate={this.handleChangeDate.bind(this)}
          ValueDate={this.state.date}
          changeNumber={this.handleChangeNumber.bind(this)}
          ValueNumber={this.state.number}
          changeName={this.handleChangeName.bind(this)}
          ValueName={this.state.nam}
          changeCVC={this.handleChangeCVC.bind(this)}
          ValueCVC={this.state.cvc}
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
