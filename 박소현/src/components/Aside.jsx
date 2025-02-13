import React from "react";
import "../App.css";

const AsideC = () => {
  const asideCStyle = {
    backgroundColor: "orange",
    height: "100%",
    flex: "1 1 auto",
  };

  return (
    <div id="AsideC" className="box" style={asideCStyle}>
      Aside
    </div>
  );
};
export default AsideC;
