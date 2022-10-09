import React from "react";
import Heading from "../components/heading";
import { Tutorial } from "../components/tutorial";
import { Interweave } from "interweave";

export default function Explore({ state, setState }) {
  console.log("state", state);
  React.useEffect(() => {
    setState({ ...state, current: "e" });
  }, []);

  function handleChange(event) {
    setState({ ...state, searchValue: event.target.value });
  }

  function handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.searchvalue);
    fetch("http://localhost:3001/req/?title=" + state.searchValue + "&type=w")
      .then((response) => response.text())
      .then((data) => setState({ ...state, explorepage: data }));
    event.preventDefault();
  }

  function resetForm() {
    setState({ ...state, searchValue: "" /*, explorepage: "" */ });
  }

  const wholePage = () => {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "grid",
          gridTemplateRows: "100%",
          gridTemplateColumns: "100%",
          overflow: "hidden",
        }}
      >
        <div className="page-container">
          <div className="page-container-head">
            {" "}
            {/* {topbar()} */}
            <Heading state={state} setState={setState} />
          </div>
          <div className="page-container-scroll" id="scroll">
            <div className="page-container-explore">
              <p className="subtitle">
                Enter a few keywords to generate an article
              </p>

              <form className="explore-grid" onSubmit={handleSubmit}>
                <div className="split">
                  <b style={{ marginBottom: "auto" }}>Topic Keyword</b>
                  <input
                    className="explore-search-bar"
                    type="text"
                    value={state.searchValue}
                    onChange={handleChange}
                  />
                </div>

                <div className="send-to-bottom">
                  <input
                    className="explore-gen-button explore-item"
                    type="submit"
                    value="GENERATE"
                  />
                </div>
                <div className="send-to-bottom">
                  <button
                    className="explore-clear-button explore-item"
                    type="button"
                    onClick={resetForm}
                  >
                    {" "}
                    CLEAR{" "}
                  </button>
                </div>
                <div className="explore-article chosen-article">
                  <div className="article">
                    <Interweave content={state.explorePage} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {state.popup ? (
          <div className="page-container-tute">
            <Tutorial state={state} setState={setState} />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return wholePage();
}
