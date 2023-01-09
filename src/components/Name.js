import React, { Component } from "react";
import "../style/Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Name">
        <input
          type="text"
          id="name"
          className="uppercase"
          placeholder="Qual seu nome?"
        />
        <input
          type="text"
          id="surname"
          className="uppercase"
          placeholder="Qual seu sobrenome?"
        />
        <input
          type="text"
          id="carreer"
          className="uppercase"
          placeholder="Qual sua especialidade?"
        />
      </div>
    );
  }
}

export default Name;
