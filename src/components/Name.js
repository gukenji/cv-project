import React, { Component } from "react";
import '../Name.css';

class Name extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname: { name: '',
                  surname: '' },
    }
  }


  render() {
    const { fullname } = this.state;
    return (
      <div className="Name">
        <form>
          <input type='text' id='name' placeholder='Qual seu nome?' />
          <input type='text' id='surname' placeholder='Qual seu sobrenome?' />
        </form>
      </div>
    );
  }
}

export default Name;
