import React, { Component } from "react";
import "../../assets/css/main_style.scss";
import notif from "../../assets/image/notif.svg";
import cogs from "../../assets/image/cogs.svg";
import profile from "../../assets/image/profile.svg";
import qMark from "../../assets/image/qMark.svg";

class SidebarBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebarBottom">
        <div className="centerX">
          <div className={`sidebarBtnBottom0 centerAuto `}>
            <img src={notif} />
          </div>
        </div>
        <div className="centerX">
          <div className={`sidebarBtnBottom1 centerAuto `}>
            <img src={cogs} />
          </div>
        </div>
        <div className="centerX">
          <div className={`sidebarBtnBottom1 centerAuto `}>
            <img src={qMark} />
          </div>
        </div>
        <div className="centerX">
          <div className={`sidebarBtnBottom2 centerAuto `}>
            <img src={profile} />
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarBottom;
