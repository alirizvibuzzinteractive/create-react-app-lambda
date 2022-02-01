import ReactDOM from "react-dom";
import React, { Component } from "react";
import SidebarBtn from "../../buttons/SidebarBtn";
import SidebarBottom from "../../buttons/SidebarBottom";
import "../../../assets/css/main_style.scss";
import icon1 from "../../../assets/image/icon1.svg";
import icon3 from "../../../assets/image/icon2.svg";
import icon2 from "../../../assets/image/icon3.svg";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <SidebarBtn icon={icon1} active={true} />
        <SidebarBtn icon={icon2} active={false} />
        <SidebarBtn icon={icon3} active={false} />
        <SidebarBottom />
      </div>
    );
  }
}

export default index;
