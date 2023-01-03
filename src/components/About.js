import React, { Component } from "react";
import '../About.css';

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
        <form>
          <input type='text' id='description' placeholder='Escreva algo sobre você!' />
        </form>
      </div>
    );
  }
}

export default About;
