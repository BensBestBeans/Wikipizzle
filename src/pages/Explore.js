import { useEffect } from "react";
import { Interweave } from "interweave";
import Template from "../components/template";

import style from "../assets/styles/explore.module.css";

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
      <div className={style["page-container-explore"]}>
        <p className="subtitle">Enter a few keywords to generate an article</p>

        <form className={style["explore-grid"]} onSubmit={handleSubmit}>
          <div>
            <b style={{ marginBottom: "auto" }}>Topic Keyword</b>
            <input
              className={style["explore-search-bar"]}
              type="text"
              value={state.searchValue}
              onChange={handleChange}
            />
          </div>

          <input
            className={`${style["explore-gen-button"]} ${style["explore-item"]}`}
            type="submit"
            value="GENERATE"
          />

          <button
            className={`${style["explore-clear-button"]} ${style["explore-item"]}`}
            type="button"
            onClick={resetForm}
          >
            CLEAR
          </button>

          <div className={`${style["explore-article"]} ${"chosen-article"}`}>
            <div className="article">
              <Interweave content={state.explorePage} />
            </div>
          </div>
        </form>
      </div>
    </Template>
  );
}
