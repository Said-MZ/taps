import React from "react";

const Divider = ({ clipPath = "polygon(0 0, 100% 0%, 0 100%)" }) => {
  return (
    <div className="w-full h-2 overflow-hidden">
      <div className="w-full h-full relative ">
        <div
          className={` h-full ${
            clipPath != "polygon(0 0, 100% 0%, 0 100%)"
              ? "bg-gradient-to-l"
              : "bg-gradient-to-r"
          } from-primary to-transparent`}
          style={{ clipPath }}
        ></div>
      </div>
    </div>
  );
};

export default Divider;
