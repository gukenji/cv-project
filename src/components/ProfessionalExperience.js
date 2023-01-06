import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import "../style/ProfessionalExperience.css";

class ProfessionalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        company: "",
        state: "",
        start_date: "",
        end_date: "",
        job_position: "",
        job_description: "",
      },
      experiences: [],
    };
    this.saveExperience = this.saveExperience.bind(this);
  }
  saveExperience(e) {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        company: "",
        state: "",
        start_date: "",
        end_date: "",
        job_position: "",
        job_description: "",
      },
    });

    console.log(this.state.experiences);
  }

  handleChange = (e) => {
    const company = document.getElementById("company").value;
    const state = document.getElementById("state").value;
    const start_date = document.getElementById("exp_start_date").value;
    const end_date = document.getElementById("exp_end_date").value;
    const job_position = document.getElementById("job_position").value;
    const job_description = document.getElementById("job_description").value;
    this.setState({
      experience: {
        company: company,
        state: state,
        start_date: start_date,
        end_date: end_date,
        job_position: job_position,
        job_description: job_description,
      },
    });
  };

  render() {
    const { experience } = this.state;
    return (
      <div className="ProfessionalExperience no-print">
        <p>EXPERIÊNCIAS PROFISSIONAIS</p>
        <form>
          <div className="left-side">
            <input
              type="text"
              id="company"
              placeholder="Nome da empresa"
              value={experience.company}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="state"
              placeholder="Local do trabalho"
              value={experience.state}
              onChange={this.handleChange}
            />
            <span>
              <input
                type="date"
                id="exp_start_date"
                placeholder="Data de Início"
                value={experience.start_date}
                onChange={this.handleChange}
              />
              <input
                type="date"
                id="exp_end_date"
                placeholder="Data de Término"
                value={experience.end_date}
                onChange={this.handleChange}
              />
            </span>
          </div>
          <div className="right-side">
            <input
              type="text"
              id="job_position"
              placeholder="Cargo"
              value={experience.job_position}
              onChange={this.handleChange}
            />
            <textarea
              maxlength="600"
              rows="5"
              cols="100"
              id="job_description"
              placeholder="Descrição do trabalho realizado"
              value={experience.job_description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button onClick={this.saveExperience}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default ProfessionalExperience;
