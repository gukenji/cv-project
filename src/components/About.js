import React, { Component } from "react";
import '../style/About.css';

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: { text: ''},
    }
  }


  render() {
    const { description } = this.state;
    return (
      <div className="About">
        <p>SOBRE MIM</p>
        <textarea maxlength="685" placeholder="Escreva algo sobre você aqui!"></textarea>
      </div>
    );
  }
}

export default About;
