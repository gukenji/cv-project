import React, { Component } from "react";
import About from './components/About'
import Contacts from './components/Contacts'
import SocialLinks from './components/SocialLinks'
import Name from './components/Name'
import ProfessionalExperience from './components/ProfessionalExperience'
import Education from './components/Education'
import Languages from './components/Languages'
import './style/App.css'

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
        <Languages />
      </div>
    );
  }
}

export default App;
