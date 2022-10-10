import { useEffect } from "react";
import { Interweave } from "interweave";
import Template from "../components/template";

export default function Explore({ state, setState }) {
  useEffect(() => {
    setState((s) => ({ ...s, current: "e" }));
  }, [setState]);

  function handleChange(event) {
    setState({ ...state, searchValue: event.target.value });
  }

  function handleSubmit(event) {
    fetch("http://localhost:3001/req/?title=" + state.searchValue + "&type=w")
      .then((response) => response.text())
      .then((data) => setState((s) => ({ ...s, explorePage: data })));
    event.preventDefault();
  }

  function resetForm() {
    setState((s) => ({ ...s, searchValue: "" }));
  }
  return (
    <Template state={state} setState={setState}>
      <div className="page-container-explore">
        <p className="subtitle">Enter a few keywords to generate an article</p>

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
              CLEAR
            </button>
          </div>
          <div className="explore-article chosen-article">
            <div className="article">
              <Interweave content={state.explorePage} />
            </div>
          </div>
        </form>
      </div>
    </Template>
  );
}
