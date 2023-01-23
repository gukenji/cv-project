import React, { Component } from "react";
import "../style/About.css";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: { text: "" },
    };
    this.saveAboutMe = this.saveAboutMe.bind(this);
    this.editAboutMe = this.editAboutMe.bind(this);
  }

  saveAboutMe(e) {
    e.preventDefault();
    const container = document.getElementsByClassName("About")[0];
    const textarea = document.getElementById("about");
    const p = document.getElementById("description");
    const edit = document.createElement("button");
    this.setState({
      description: {
        text: textarea.value,
      },
    });

    e.target.remove();
    textarea.remove();
    p.innerHTML = textarea.value;
    edit.innerHTML = "Editar";
    edit.className = "no-print";
    edit.onclick = this.editAboutMe;
    container.appendChild(edit);
  }

  editAboutMe(e) {
    e.preventDefault();
    e.target.remove();
    const { description } = this.state;
    const about = document.getElementsByClassName("About")[0];
    const p = document.getElementById("description");
    p.innerHTML = "";
    const textarea = document.createElement("textarea");
    this.state = {
      description: { text: "" },
    };
    textarea.value = description.text;
    textarea.id = "about";
    const button = document.createElement("button");
    button.innerHTML = "Salvar";
    button.onclick = this.saveAboutMe;
    about.appendChild(textarea);
    about.appendChild(button);
  }

  render() {
    const { description } = this.state;
    return (
      <div className="About">
        <UploadAndDisplayImage />
        <p>SOBRE MIM</p>
        <p id="description"></p>
        <div>
          <textarea
            maxlength="1000"
            id="about"
            className="no-print"
            placeholder="Escreva algo sobre você aqui!"
          ></textarea>
          <button className="no-print" onClick={this.saveAboutMe}>
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

export default About;
