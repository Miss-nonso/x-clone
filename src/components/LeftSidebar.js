import React from "react";
import { leftMenu } from "../assets/images/leftMenuIcons";

const LeftSidebar = () => {
  return (
    <aside className="left-container">
      {leftMenu.map((menu, idx) => (
        <div className="left-icon" key={idx}>
          {" "}
          <a href={menu.href}>
            <img
              src={menu.icon}
              alt={`${menu.title} icon`}
              //   className="left-icon"
            />
          </a>
        </div>
      ))}
      {/* <div className="left-icon">B</div>
      <div className="left-icon">T</div>
      <div className="left-icon">I</div>
      <div className="left-icon">OP</div>
      <div className="left-icon">G</div>
      <div className="left-icon">H</div>
      <div className="left-icon">Y</div>
      <div className="left-icon">G</div>
      <div className="left-icon">OS</div>
      <div className="left-icon">G</div> */}
    </aside>
  );
};

export default LeftSidebar;
