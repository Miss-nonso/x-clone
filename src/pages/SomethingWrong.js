import React from "react";
import LoaderSVG from "../assets/images/loader";

const SomethingWrong = () => {
  return (
    <div className="something-wrong-page">
      {window === undefined ? (
        setTimeout(() => {
          <LoaderSVG />;
        }, 2000)
      ) : (
        <h2 className="">Something went wrong</h2>
      )}
    </div>
  );
};

export default SomethingWrong;
