import Heading from "./heading";
import { Tutorial } from "./tutorial";
import style from "../assets/styles/template.module.css";

export default function Template({ state, setState, page, children }) {
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
      <div className={style["container"]}>
        <div className={style["container-head"]}>
          <Heading state={state} setState={setState} page={page} />
        </div>
        <div className={style["container-scroll"]} id="scroll">
          {children}
        </div>
      </div>
      {state.popup ? (
        <div className={style["container-tute"]}>
          <Tutorial state={state} setState={setState} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
