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
        {/* é possivel aumentar ou diminuir o length de acordo com o espaco disponivel? */}
        {/* tentar manter heights fixos para cada seção, porém nâo é o ideal caso a pessoa escreva pouco em About Me ou coloque poucos idiomas */}
        <textarea maxlength="600" placeholder="Escreva algo sobre você aqui!"></textarea>
        <p className="end-section"></p>
      </div>
    );
  }
}

export default About;
