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

export default function Heading({ state, setState, page }) {
  return (
    <>
      <div className={style["logo-header"]}>
        <div className={style["head-logo-container"]}>
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="" />
          </div>
          <a href="https://www.wikipedia.org/">Wiki{state.pizz}izzle</a>
        </div>

        <div className={style["head-button-container"]}>
          <ul>
            <li>
              <TopButton current={page} next={"q"} />{" "}
            </li>
            <li>
              <TopButton current={page} next={"e"} />{" "}
            </li>
            {/* <li> {this.topbut("LRN", "Learn More")} </li> */}
          </ul>
        </div>

        <div className={style["head-tute-container"]}>
          <Link
            className={style["head-button"]}
            onClick={() => setState((s) => ({ ...s, popup: !s.popup }))}
          >
            Help
          </Link>
        </div>
      </div>
    </>
  );
}
