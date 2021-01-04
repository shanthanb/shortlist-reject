import React from "react";
import CandidateCard from "./CandidateCard";
import "./Candidate.css";
import BackButton from "../Basics/BackButton";

const SelectedCandidates = (props) => {
  const { heading, candidates, onBackClick } = props;
  return (
    <div>
      <BackButton onBackClick={onBackClick} />
      <h2>{heading}</h2>
      {!!candidates.length ? (
        candidates.map((candidate) => (
          <div key={candidate.id} className="candidateParent">
            <CandidateCard name={candidate.name} image={candidate.Image} />
          </div>
        ))
      ) : (
        <h3>There are no candidates in this criteria</h3>
      )}
    </div>
  );
};

export default SelectedCandidates;
