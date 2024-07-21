import React from "react";

const BG = () => {
  return (
    <div className="absolute h-full w-full -z-10 ">
      <div className="absolute bottom-0 left-[-20%] right-12 top-[50%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(25,87,193,0.25),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(0,123,255,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(25,87,193,0.25),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(0,123,255,0.15),rgba(255,255,255,0))]"></div>
    </div>
  );
};

export default BG;
