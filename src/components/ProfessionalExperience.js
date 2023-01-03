import React, { Component } from "react";
import '../ProfessionalExperience.css';

class ProfessionalExperience extends Component {
  constructor(props){
    super(props);
    this.state = {
      experience: { company: '',
                    start_date: '',
                    end_date: '',
                    job_description: ''
                  }
    }
  }


  render() {
    const { experience } = this.state;
    return (
      <div className="ProfessionalExperience">
        <form>
          <input type='text' id='company' placeholder='Nome da empresa' />
          <input type='date' id='exp_start_date' placeholder='Data de Início' />
          <input type='date' id='exp_end_date' placeholder='Data de Término' />
          <input type='text' id='job_description' placeholder='Descrição do trabalho' />

        </form>
      </div>
    );
  }
}

export default ProfessionalExperience;
