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

    </aside>
  );
};

export default LeftSidebar;
