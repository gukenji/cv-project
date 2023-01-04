import React, { Component } from "react";
import '../style/Languages.css';

class Languages extends Component {
  constructor(props){
    super(props);
    this.state = {
      skill: { text: '',
               proficiency: 1},
      skills: []
    }
    this.showValue = this.showValue.bind(this);
    this.saveLanguage = this.saveLanguage.bind(this);
  }

  showValue(){
    const output = document.getElementById('language-output');
    const value = document.getElementById('language-range').value;
    output.textContent = this.proficiencyLevel(parseInt(value));
  }

  proficiencyLevel(integer) {
    switch (integer) {
      case 1:
        return "Básico";
        break;
      case 2:
        return "Intermediário";
        break;
      case 3:
        return "Avançado";
        break;
      case 4:
        return "Fluente";
        break;
    }
  }

  saveLanguage(e) {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: { text: '',
              proficiency: null},
    })
  }

  handleChange = (e) => {
    const text = document.getElementById('languages').value;
    const proficiency = parseInt(document.getElementById('language-range').value);
    this.setState({
      skill : {
        text: text,
        proficiency: proficiency  
      }
    });
  };

  render() {
    const { skills, skill } = this.state;
    return (
      <div className="Languages">
        <p>IDIOMAS</p>
          {skills.map((skill) => {
            return (<div className="RenderLanguages">
                      <p>{skill.text}</p>
                      <p>{this.proficiencyLevel(skill.proficiency)}</p>
                    </div>
            )
          })}
        <div className="NewLanguage">
          <form>
            <input type='text' id='languages' placeholder='Idioma' onChange={this.handleChange} value={skill.text}/>
            <input type='range'  defaultValue="1" min="1" max="4" step="1" onClick={this.showValue}  onChange={this.handleChange} id="language-range" /> <span id="language-output"></span>
            <button onClick={this.saveLanguage}>Salvar</button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    {this.showValue()}
  }
  
}

export default Languages;
