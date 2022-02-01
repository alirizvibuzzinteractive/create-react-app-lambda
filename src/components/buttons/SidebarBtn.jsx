import React, { Component } from "react";
import "../../assets/css/main_style.scss";

class SidebarBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="centerX pt-8">
        <div className={`sidebarBtn centerAuto ${this.props.active==true?'activeBg':null}`}>
          <img src={this.props.icon} />
        </div>
      </div>
    );
  }
}

export default SidebarBtn;
