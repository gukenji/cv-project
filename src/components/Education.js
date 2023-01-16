import React, { Component } from "react";
import "../style/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        institute: "",
        start_date: "",
        end_date: "",
        type: "",
        course: "",
      },
      educations: [],
    };
    this.saveExperience = this.saveExperience.bind(this);
  }

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
    return `${month}/${year}`;
  }

  saveExperience(e) {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        institute: "",
        start_date: "",
        end_date: "",
        type: "",
        course: "",
      },
    });
  }

  handleChange = (e) => {
    const institute = document.getElementById("institute").value;
    const start_date = document.getElementById("edu-start-date").value;
    const end_date = document.getElementById("edu-end-date").value;
    const type = document.getElementById("edu-type").value;
    const course = document.getElementById("edu-course").value;
    this.setState({
      education: {
        institute: institute,
        start_date: start_date,
        end_date: end_date,
        type: type,
        course: course,
      },
    });
  };

  render() {
    const { education, educations } = this.state;
    return (
      <div className="Educations">
        <p>FORMAÇÃO ACADÊMICA</p>

        {educations.reverse().map((edu, index) => {
          return (
            <div className="Education">
              <div className="render-left-side">
                <p>{edu.institute}</p>
                <p>
                  <span>
                    {this.formatDate(edu.start_date)} -{" "}
                    {this.formatDate(edu.end_date)}
                  </span>
                </p>
              </div>
              <div className="timeline">
                {(() => {
                  if (index == educations.length - 1) {
                    return <div className="first-point"></div>;
                  }
                })()}
                <div className="point"></div>
              </div>
              <div className="render-right-side">
                <p>{edu.type}</p>
                <p>{edu.course}</p>
              </div>
            </div>
          );
        })}
        <form className="no-print">
          <div className="form-left-side">
            <input
              type="text"
              id="institute"
              value={education.institute}
              onChange={this.handleChange}
              placeholder="Instituição"
            />
            <span>
              <input
                type="date"
                id="edu-start-date"
                placeholder="Ano de Início"
                value={education.start_date}
                onChange={this.handleChange}
                required
              />
              -
              <input
                type="date"
                id="edu-end-date"
                value={education.end_date}
                onChange={this.handleChange}
                placeholder="Ano de Conclusão"
                required
              />
            </span>
          </div>
          <div className="form-right-side">
            <input
              type="text"
              id="edu-type"
              value={education.type}
              onChange={this.handleChange}
              placeholder="Tipo de Graduação"
            />
            <input
              type="text"
              id="edu-course"
              value={education.course}
              onChange={this.handleChange}
              placeholder="Nome do curso"
            />
          </div>
          <button onClick={this.saveExperience}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default Education;
