import React from "react";
import "./Candidate.css";

const CandidateCard = (props) => {
  const { name, image } = props;
  return (
    <div className="candidateCard">
      <img src={image} alt={name} />
      <div className="name">Name: {name}</div>
    </div>
  );
};

export default CandidateCard;
