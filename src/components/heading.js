import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/wikipizzlelogo.png";
import "../assets/styles/App.css";

function TopButton({ current, next }) {
  return next === "q" ? (
    <Link
      className={
        current == next ? "head-button head-button-active" : "head-button"
      }
      to={"/"}
    >
      <p>{"Quizzle"}</p>
    </Link>
  ) : (
    <Link
      to={"/explore"}
      className={
        current == next ? "head-button head-button-active" : "head-button"
      }
    >
      {"Explore"}
    </Link>
  );
}

export default function Heading({ state, setState }) {
  console.log("state", state);
  return (
    <>
      <div className="logo-header">
        <div className="head-logo-container">
          <img src={logo} alt="" />
          <a href="https://www.wikipedia.org/">Wiki{state.l}izzle</a>
        </div>

        <div className="head-button-container">
          <ul>
            <li>
              <TopButton current={state.current} next={"q"} />{" "}
            </li>
            <li>
              <TopButton current={state.current} next={"e"} />{" "}
            </li>
            {/* <li> {this.topbut("LRN", "Learn More")} </li> */}
          </ul>
        </div>

        <div className="head-tute-container">
          <button
            className="question-mark"
            style={{ margin: "20px" }}
            onClick={() => setState({ ...state, popup: !state.popup })}
          >
            {" "}
            ?{" "}
          </button>
        </div>
      </div>
    </>
  );
}
