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
  }

  handleChange = (e) => {
    const company = document.getElementById("company").value;
    const state = document.getElementById("state").value;
    const start_date = document.getElementById("exp-start-date").value;
    const end_date = document.getElementById("exp-end-date").value;
    const job_position = document.getElementById("job-position").value;
    const job_description = document.getElementById("job-description").value;
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

  formatDate(date) {
    const year = date.substring(0, 4);
    var month = date.substring(5, 7);
    var objDate = new Date();
    const locale = "pt-br";
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const isActual =
      parseInt(month) == currentMonth && parseInt(year) == currentYear;

    objDate.setDate(1);
    objDate.setMonth(month - 1);
    month = objDate.toLocaleString(locale, { month: "short" }).substring(0, 3);
    return isActual ? "Atual" : `${month}/${year}`;
  }

  render() {
    const { experience, experiences } = this.state;

    return (
      <div className="ProfessionalExperience">
        <p>EXPERIÊNCIAS PROFISSIONAIS</p>
        {experiences.reverse().map((exp, index) => {
          return (
            <div className="Experience">
              <div className="render-left-side">
                <p>{exp.company}</p>
                <p>{exp.state}</p>
                <p>
                  <span>
                    {this.formatDate(exp.start_date)} -{" "}
                    {this.formatDate(exp.end_date)}
                  </span>
                </p>
              </div>
              <div className="timeline">
                {(() => {
                  if (index == experiences.length - 1) {
                    return <div className="first-point"></div>;
                  }
                })()}
                <div className="point"></div>
              </div>
              <div className="render-right-side">
                <p>{exp.job_position}</p>
                <p>{exp.job_description}</p>
              </div>
            </div>
          );
        })}
        <form className="no-print">
          <div className="form-left-side">
            <input
              type="text"
              id="company"
              placeholder="Nome da empresa"
              value={experience.company}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              id="state"
              placeholder="Local do trabalho"
              value={experience.state}
              onChange={this.handleChange}
              required
            />
            <span>
              <input
                type="date"
                id="exp-start-date"
                placeholder="Data de Início"
                value={experience.start_date}
                onChange={this.handleChange}
                required
              />
              -
              <input
                type="date"
                id="exp-end-date"
                placeholder="Data de Término"
                value={experience.end_date}
                onChange={this.handleChange}
                required
              />
            </span>
          </div>
          <div className="form-right-side">
            <input
              type="text"
              id="job-position"
              placeholder="Cargo"
              value={experience.job_position}
              onChange={this.handleChange}
            />
            <textarea
              maxlength="1200"
              rows="5"
              cols="100"
              id="job-description"
              placeholder="Descrição do trabalho realizado"
              value={experience.job_description}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.saveExperience}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default ProfessionalExperience;
