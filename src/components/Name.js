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
        <form>
          <input type='text' id='name' placeholder='Qual seu nome?' />
          <input type='text' id='surname' placeholder='Qual seu sobrenome?' />
          <input type='text' id='carreer' placeholder='Especialidade' />
        </form>
      </div>
    );
  }
}

export default Name;
