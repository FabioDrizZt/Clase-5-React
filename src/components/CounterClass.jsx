import React from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>Componente de Clase vale: {this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Incrementar de clase</button>
        <button onClick={this.handleDecrement}>Decrementar de clase</button>
      </div>
    );
  }
}
