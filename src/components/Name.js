import React, { Component } from "react";
import '../style/Name.css';

class Name extends Component {
  constructor(props){
    super(props);
    this.state = {
      myinfos: { name: '',
                  surname: '',
                  carreer: '' },
    }
  }


  render() {
    const { myinfos } = this.state;
    return (
      <div className="Name">
          <input type='text' id='name' className="uppercase" placeholder='Qual seu nome?' />
          <input type='text' id='surname' className="uppercase" placeholder='Qual seu sobrenome?' />
          <input type='text' id='carreer' className="uppercase" placeholder='Especialidade' />
      </div>
    );
  }
}

export default Name;
