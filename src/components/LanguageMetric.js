import React, { Component } from "react";
import "../style/LanguageMetric.css";

class LanguageMetric extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var painted = [];
    for (var i = 0; i < this.props.skill; i++) {
      painted.push(<div className="painted"></div>);
    }
    var unpainted = [];
    for (var j = 0; j < 4 - this.props.skill; j++) {
      painted.push(<div className="unpainted"></div>);
    }
    return (
      <div className="LanguageMetric">
        {painted}
        {unpainted}
      </div>
    );
  }
}

export default LanguageMetric;
