import React, { useEffect, useState } from "react";
import axios from "axios";
import Candidate from "./Candidate";
import Search from "../Basics/Search";
import { useHistory } from "react-router-dom";

const Candidates = (props) => {
  const { onCandidateClick } = props;
  const history = useHistory();

  const [candidates, setCandidates] = useState([]);
  const [isAPIError, setIsAPIError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onChange = (event) => setSearchText(event.target.value);

  const onClick = (candidate) => {
    onCandidateClick(candidate);
    history.push(`/${candidate.id}`);
  };

  const onShowShortlistedCandidates = () => history.push("/shortlisted"); 

  const onShowRejectedCandidates = () => history.push("/rejected");

  useEffect(() => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((response) => setCandidates([...response.data]))
      .catch(() => setIsAPIError(true));
  }, []);

  return (
    <div className="candidates">
      <h2>All Candidates</h2>
      {!!candidates.length && (
        <>
          <div className="controls">
            <Search searchText={searchText} onChange={onChange} />
            <button type="button" onClick={onShowShortlistedCandidates}>
              SHORTLISTED CANDIDATES
            </button>
            <button type="button" onClick={onShowRejectedCandidates}>
              REJECTED CANDIDATES
            </button>
          </div>
          {candidates.map((candidate) => (
            <Candidate
              key={candidate.id}
              candidate={candidate}
              searchText={searchText}
              onClick={onClick}
            />
          ))}
        </>
      )}

      {isAPIError && <>Something Went Wrong</>}
    </div>
  );
};

export default Candidates;
