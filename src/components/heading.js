import { Link } from "react-router-dom";
import logo from "../assets/images/wikipizzlelogo.png";
import style from "../assets/styles/heading.module.css";

function TopButton({ current, next }) {
  return next === "q" ? (
    <Link
      className={
        current === next
          ? `${style["head-button"]} ${style["head-button-active"]}`
          : style["head-button"]
      }
      to={"/"}
    >
      <p>{"Quizzle"}</p>
    </Link>
  ) : (
    <Link
      to={"/explore"}
      className={
        current === next
          ? `${style["head-button"]} ${style["head-button-active"]}`
          : style["head-button"]
      }
    >
      {"Explore"}
    </Link>
  );
}

export default function Heading({ state, setState }) {
  console.log("render heading");
  return (
    <>
      <div className={style["logo-header"]}>
        <div className={style["head-logo-container"]}>
          <img src={logo} alt="" />
          <a href="https://www.wikipedia.org/">Wiki{state.pizz}izzle</a>
        </div>

        <div className={style["head-button-container"]}>
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

        <div className={style["head-tute-container"]}>
          <button
            className={style["question-mark"]}
            style={{ margin: "20px" }}
            onClick={() => setState((s) => ({ ...s, popup: !s.popup }))}
          >
            {" "}
            ?{" "}
          </button>
        </div>
      </div>
    </>
  );
}
