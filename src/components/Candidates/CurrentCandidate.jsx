import React from "react";
import CandidateCard from "./CandidateCard";
import "./Candidate.css";
import BackButton from "../Basics/BackButton";

const CurrentCandidate = (props) => {
  const {
    candidate,
    onShortlistClick,
    onRejectClick,
    selectionCriteria,
    onBackClick,
  } = props;

  return (
    <div className="candidateParent">
      <BackButton onBackClick={onBackClick} />
      <CandidateCard name={candidate?.name} image={candidate?.Image} />
      {!selectionCriteria && (
        <>
          <button type="button3" onClick={onShortlistClick}>
            SHORTLIST
          </button>
          <button type="button3" onClick={onRejectClick}>
            REJECT
          </button>
        </>
      )}
      {selectionCriteria === "SHORTLISTED" && (
        <span>This Candidate is SHORTLISTED</span>
      )}
      {selectionCriteria === "REJECTED" && (
        <span>This Candidate is REJECTED</span>
      )}
    </div>
  );
};

export default CurrentCandidate;
