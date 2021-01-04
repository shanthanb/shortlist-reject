import React, { memo } from "react";
import "./Candidate.css";
import CandidateCard from "./CandidateCard";

const Candidate = (props) => {
  const { candidate, searchText, onClick } = props;
  const { Image: image, name } = candidate;

  const regExp = new RegExp(searchText, "i");

  const onCandidateClick = () => onClick(candidate);

  return (
    name.search(regExp) >= 0 && (
      <div className="candidateParent" onClick={onCandidateClick}>
        <CandidateCard name={name} image={image} />
      </div>
    )
  );
};

export default memo(Candidate);
