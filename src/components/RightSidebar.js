import React from "react";
import { trends } from "../assets/data/trends";
import Search from "./Search";

const RightSidebar = () => {
  return (
    <aside className="right-container">
      <div className="right-wrapper">
        {" "}
        <Search />
        <div className="item-wrapper">
          <h4 className="right-container-heading">Subscribe to Premium</h4>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </p>
          <button href="#" className="bg-link">
            {" "}
            Subscribe
          </button>
        </div>
        <div className="item-wrapper">
          <h5 className="right-container-heading">What's happening</h5>

          {trends.map((trend, idx) => (
            <div key={idx} className="trend">
              <div>
                <p>{trend.location}</p>
                <h6>{trend.trend}</h6>
                <p>{Number(trend.noOfPosts).toLocaleString()}</p>
              </div>
              <div className="three-dots">...</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
