import React, { Component } from "react";
import '../Skills.css';

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      skill: { text: ''}
    }
  }


  render() {
    const { skill } = this.state;
    return (
      <div className="Skills">
        <form>
          <input type='text' id='skill' placeholder='Habilidade' />

        </form>
      </div>
    );
  }
}

export default Skills;
