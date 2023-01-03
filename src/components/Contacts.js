import React, { Component } from "react";
import '../Contacts.css';

class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {
      infos: { telephone: '' ,
               email: '',
               address: ''
              }
    }
  }


  render() {
    const { infos } = this.state;
    return (
      <div className="Contacts">
        <form>
          <input type='tel' id='telephone' placeholder='Telefone' />
          <input type='email' id='email' placeholder='E-mail' />
          <input type='text' id='address' placeholder='Endereço' />
        </form>
      </div>
    );
  }
}

export default Contacts;
