import React, { Component } from "react";
import About from './components/About'
import Contacts from './components/Contacts'
import SocialLinks from './components/SocialLinks'
import Name from './components/Name'
import ProfessionalExperience from './components/ProfessionalExperience'
import Education from './components/Education'
import Skills from './components/Skills'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <About />
        <Contacts />
        <SocialLinks />
        <Name />
        <ProfessionalExperience />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default App;
