import React, { Component } from "react";
import '../style/Education.css';

class Education extends Component {
  constructor(props){
    super(props);
    this.state = {
      education: { institute: '' ,
                   start_date: '',
                   end_date: ''
                  }   
    }
  }


  render() {
    const { education } = this.state;
    return (
      <div className="Education">
        <form>
          <input type='text' id='institute' placeholder='Instituição' />
          <input type='date' id='edu_start_date' placeholder='Ano de Início' />
          <input type='date' id='edu_end_date' placeholder='Ano de Conclusão' />
        </form>
      </div>
    );
  }
}

export default Education;
