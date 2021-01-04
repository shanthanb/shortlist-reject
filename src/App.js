import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Candidates from "./components/Candidates/Candidates";
import CurrentCandidate from "./components/Candidates/CurrentCandidate";
import SelectedCandidates from "./components/Candidates/SelectedCandidates";
import "./App.css";
import "./components/Basics/Basics.css";

const App = () => {
  const history = useHistory();

  const [currentCandidate, setCurrentCandidate] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [selectionCriteria, setSelectionCriteria] = useState("");

  const onCandidateClick = (value) => {
    const selectedCandidate = candidates.find(
      (candidate) => candidate.id === value.id
    );
    if (selectedCandidate) {
      selectedCandidate.isShortlisted
        ? setSelectionCriteria("SHORTLISTED")
        : setSelectionCriteria("REJECTED");
    } else {
      setSelectionCriteria("");
    }
    setCurrentCandidate(value);
  };

  const onShortlistClick = () => {
    setCandidates([
      ...candidates,
      { ...currentCandidate, isShortlisted: true },
    ]);
    history.push("/");
  };

  const onRejectClick = () => {
    setCandidates([...candidates, { ...currentCandidate, isRejected: true }]);
    history.push("/");
  };

  const onBackClick = () => history.push("/");

  const shortlistedCandidates = candidates.filter(
    (candidate) => candidate.isShortlisted
  );

  const rejectedCandidates = candidates.filter(
    (candidate) => candidate.isRejected
  );

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Candidates onCandidateClick={onCandidateClick} />
        </Route>
        <Route path="/shortlisted">
          <SelectedCandidates
            heading="Shortlisted Candidates"
            candidates={shortlistedCandidates}
            onBackClick={onBackClick}
          />
        </Route>
        <Route path="/rejected">
          <SelectedCandidates
            heading="Rejected Candidates"
            candidates={rejectedCandidates}
            onBackClick={onBackClick}
          />
        </Route>
        <Route path="/:id">
          <CurrentCandidate
            candidate={currentCandidate}
            onShortlistClick={onShortlistClick}
            onRejectClick={onRejectClick}
            selectionCriteria={selectionCriteria}
            onBackClick={onBackClick}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
