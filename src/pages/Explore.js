import { Interweave } from "interweave";
import Template from "../components/template";

import style from "../assets/styles/explore.module.css";

export default function Explore({ state, setState }) {
  function handleChange(event) {
    setState({ ...state, searchValue: event.target.value });
  }

  function handleSubmit(event) {
    setState((s) => ({ ...s, explorePage: "Generating" }));
    fetch("http://localhost:3001/req/?title=" + state.searchValue + "&type=p")
      .then((response) => response.text())
      .then((data) => setState((s) => ({ ...s, explorePage: data })));
    event.preventDefault();
  }

  function resetForm() {
    setState((s) => ({ ...s, searchValue: "" }));
  }
  return (
    <Template state={state} setState={setState} page={"e"}>
      <div className={style["page-container-explore"]}>
        <p className="subtitle">Enter a few keywords to generate an article</p>

        <form className={style["explore-grid"]} onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <b>Topic Keyword</b>
            <input
              className={` ${style["explore-search-bar"]}`}
              type="text"
              value={state.searchValue}
              placeholder="Scott Morrison"
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
            {state.explorePage === "Generating" ? (
              <div className={style["generating"]}>
                <div>
                  <h1>Generating</h1>
                  <h2>this may take a hot minute</h2>
                </div>
              </div>
            ) : (
              <div className="article">
                <Interweave content={state.explorePage} />
              </div>
            )}
          </div>
        </form>
      </div>
    </Template>
  );
}
