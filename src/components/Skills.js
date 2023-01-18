import React, { Component } from "react";
import "../style/Skills.css";
import axios from "axios";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.getIcons = this.getIcons.bind(this);
  }

  RenderIcon = (link) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const query = document.getElementById("search-images-input").value;
    const container = document.getElementById("render-images");
    img.src = link;
    img.width = "100";
    img.height = "100";
    p.innerText = query;
    div.classList.add("skill-container");
    div.appendChild(img);
    div.appendChild(p);
    container.appendChild(div);
  };

  async getIcons(e) {
    e.preventDefault();
    const modal = document.createElement("div");
    const h2 = document.createElement("h2");
    const root = document.getElementById("root");
    const query = document.getElementById("search-images-input").value;
    const close_button = document.createElement("img");
    const container = document.createElement("div");
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/icons/search?query=${query}&count=10`,
      {
        headers: {
          Authorization:
            "Bearer 4WvUZMQ7oZ6FYw9DKv9bAzHpou16248Hw5saCwHN5NEHAQUaAVZKm0WFiYnuXt1P",
        },
      }
    );
    const data = await response.data.icons;
    h2.textContent =
      "Por favor, clique na imagem que melhor representa a habilidade.";
    close_button.src =
      "https://www.freeiconspng.com/uploads/silver-close-button-png-15.png";
    close_button.id = "close_button";
    modal.appendChild(h2);
    modal.appendChild(close_button);
    data.map((icon) => {
      const img = document.createElement("img");
      const div = document.createElement("div");
      img.src =
        icon.raster_sizes[icon.raster_sizes.length - 1].formats[0].preview_url;
      img.className = "img_icon";
      img.width = "100";
      img.height = "100";
      img.onclick = (e) => {
        const src = e.target.src;
        this.RenderIcon(src);
        modal.remove();
      };
      div.classList.add("skill-container");
      div.appendChild(img);
      container.appendChild(div);
    });

    close_button.onclick = (e) => {
      e.target.parentElement.remove();
    };

    modal.appendChild(container);
    root.appendChild(modal);

    container.className = "container no-print";
    modal.className = "modal no-print";
  }

  render() {
    return (
      <div className="Skills">
        <p>HABILIDADES TÉCNICAS</p>
        <div id="render-images"></div>
        <div id="search-images" className="no-print">
          <input type="text" id="search-images-input" />
          <button onClick={this.getIcons}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default Skills;
