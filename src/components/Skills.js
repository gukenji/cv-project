import React, { Component } from "react";
import "../style/Skills.css";
import axios from "axios";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  async getIcon(e) {
    e.preventDefault();
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const query = document.getElementById("search-images-input").value;
    const container = document.getElementById("render-images");
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/icons/search?query=${query}&count=10`,
      {
        headers: {
          Authorization:
            "Bearer 4WvUZMQ7oZ6FYw9DKv9bAzHpou16248Hw5saCwHN5NEHAQUaAVZKm0WFiYnuXt1P",
        },
      }
    );
    const data = await response.data.icons[0];

    img.src = data.raster_sizes[5].formats[0].preview_url;
    img.width = "100";
    img.height = "100";
    p.innerText = query;
    div.classList.add("skill-container");
    div.appendChild(img);
    div.appendChild(p);
    container.appendChild(div);
  }

  render() {
    return (
      <div className="Skills">
        <p>HABILIDADES TÉCNICAS</p>
        <div id="render-images"></div>
        <div id="search-images" className="no-print">
          <input type="text" id="search-images-input" />
          <button onClick={this.getIcon}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default Skills;
