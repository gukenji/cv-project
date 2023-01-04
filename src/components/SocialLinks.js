import React, { Component } from "react";
import '../style/SocialLinks.css';

class SocialLinks extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: { linkedin: '',
               github: ''}
    }
  }


  render() {
    const { links } = this.state;
    return (
      <div className="SocialLinks">
        <form>
          <input type='text' id='linkedin' placeholder='Linkedin' />
          <input type='text' id='github' placeholder='Github' />

        </form>
      </div>
    );
  }
}

export default SocialLinks;
