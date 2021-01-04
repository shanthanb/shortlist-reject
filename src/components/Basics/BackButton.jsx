import React from "react";

const BackButton = (props) => {
  const { onBackClick } = props;
  return (
    <button type="button1" onClick={onBackClick}>
      Back
    </button>
  );
};

export default BackButton;
