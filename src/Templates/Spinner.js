import React from "react";
const Sppiner = props => {
  const SpinnerType = "spinner-border " + props.type;
  return (
    <div className={SpinnerType} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Sppiner;
