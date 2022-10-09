import logo from "../assets/images/wikipizzlelogo.png";
import inconsistencies from "../assets/images/inconsistencies-icon.png";
import checkvibes from "../assets/images/check-vibes-icon.png";
import quotes from "../assets/images/quotes-icon.png";
import sloppywriting from "../assets/images/sloppy-writing-icon.png";

import { Link } from "react-router-dom";
import Heading from "../components/heading";
import "../assets/styles/App.css";
import React, { useEffect } from "react";
import { Interweave } from "interweave";
import { Tutorial, tutorial } from "../components/tutorial";

function Pizzle({ state, setState, data }) {
  console.log("render");
  console.log(state);
  React.useEffect(() => {
    setState({ ...state, current: "q" });
  }, []);
  // this.ops = ["p", "fr", "d", "w"];
  // this.l = this.ops[Math.floor(Math.random() * this.ops.length)];
  // this.state = {
  //   tutePage: 0,
  //   page: 0,
  //   popup: false,
  //   mode: "GES",
  //   html: "loading...",
  //   title: "",
  //   searchValue: "",
  //   explorePage: "",
  //   contentType: false,
  // };

  // this.state.md = getmd(this.state.mdtype);
  // this.state.contentType = false;
  // console.log("BAKEND!");

  // console.log("front!");
  // console.log(state.title);

  // This binding is necessary to make `this` work in the callback
  // this.guessed = this.guessed.bind(this);
  // this.home = this.home.bind(this);
  // this.listenScrollEvent = this.listenScrollEvent.bind(this);
  // this.wholePage = this.wholePage.bind(this);
  // // this.switchMode = this.switchMode.bind(this);
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.resetForm = this.resetForm.bind(this);

  // this.bopTutePage = this.bopTutePage.bind(this);
  // this.bumpTutePage = this.bumpTutePage.bind(this);

  const head = (
    <p className="subtitle">
      Wikipedia or AI-Generated? Take a guess and test your skills!
    </p>
  );

  // TODO - delete this
  // const topbut = (mode, text) =>
  //   // <div className='button-container'> <button className="head-button" role="button" onClick={() => this.setState({mode: mode})}><span>{text}</span> </button></div>
  //   state.mode === mode ? (
  //     <button
  //       className="head-button head-button-active"
  //       onClick={() => setState({ ...state, mode: mode })}
  //     >
  //       {text}{" "}
  //     </button>
  //   ) : (
  //     <button
  //       className="head-button"
  //       onClick={() => setState({ ...state, mode: mode })}
  //     >
  //       {text}{" "}
  //     </button>
  //   );

  // const topbar = () => (
  //   <div className="logo-header">
  //     <div className="head-logo-container">
  //       <img src={logo} alt="" />
  //       <a href="https://www.wikipedia.org/">Wiki{state.pizz}izzle</a>
  //     </div>

  //     <div className="head-button-container">
  //       <ul>
  //         <li> {topbut("GES", "Quizzle")} </li>
  //         <li> {topbut("EXP", "Explore")} </li>
  //         {/* <li> {this.topbut("LRN", "Learn More")} </li> */}
  //       </ul>
  //     </div>

  //     <div className="head-tute-container">
  //       <button
  //         className="question-mark"
  //         style={{ margin: "20px" }}
  //         onClick={() => setState({ ...state, popup: !state.popup })}
  //       >
  //         {" "}
  //         ?{" "}
  //       </button>
  //     </div>
  //   </div>
  // );

  const choose = () => (
    <div className="app">
      {/* <header> {this.topbar()} </header> */}
      {head}

      <div className="article-container">
        <div className="article">
          <Interweave content={data.html} />
        </div>
      </div>

      <div className="ins">
        <div className="button-container">
          {" "}
          <button className="button1" onClick={() => guessed(true)}>
            <span>WIKIPEDIA</span>
          </button>{" "}
        </div>
        <div className="button-container">
          {" "}
          <button className="button2" onClick={() => guessed(false)}>
            <span>AI GENERATED</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );

  const correct = (
    <div className="app">
      <header></header>
      {head}

      <div className="answer-box">something</div>

      <div className="article"> something</div>
      <div className="ins">
        <button className="button1" onClick={() => home()}>
          <span>HOME</span>
        </button>
      </div>
    </div>
  );

  const chosen = () => {
    const stats = JSON.parse(localStorage.getItem("stats"));
    const answerbox =
      "answer-box " + (state.page === 1 ? "correct" : "incorrect");
    return (
      <div className="app">
        {head}

        <div className="chosen-container">
          <div className={answerbox}>
            <h2 className="answer-box">
              {state.page === 1 ? "Correct" : "Incorrect"}
            </h2>
            <h3 className="answer-box">
              {state.page === 1 ? "You're right!" : "You have been deceived!"}{" "}
              Today's article{" "}
              {data.contentType
                ? "was an actual Wikipedia article"
                : "was generated by AI"}
            </h3>
          </div>

          {/* <div className="left-wrapper">
                  L
                </div>

                <div className="right-wrapper">
                  R */}
          <div className="left-wrapper">
            <div className="chosen-article">
              <div className="article">
                <Interweave content={data.html} />
              </div>
            </div>
            <div className="learn-more">
              Want to find out more about this topic?
              <a
                target="_blank"
                href={`https://letmegooglethat.com/?q=${data.title}`}
              >
                Click here
              </a>
            </div>
          </div>

          <div className="right-wrapper">
            <div className="stats">
              <h2> people deceived </h2>
              <h1> pi chart </h1>
              <h3> your statistics </h3>
              <h4> {JSON.stringify(stats)} </h4>
              <h4> win rate </h4>
              <h4> {`${(stats.win / (stats.loss + stats.win)) * 100}%`} </h4>
              <h4> -------- </h4>
              <h4> Correct Streak: </h4>
              <h4> {stats.streak} </h4>
            </div>

            {/* <div className='padded'>
        This . Better luck next time.
      </div> */}

            {/* <div className='article'>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
      </div> */}
          </div>
        </div>

        {/* <div className='ins'>
      <button className="button1" role="button" onClick={() => this.home()}><span>HOME</span></button>
      </div> */}
      </div>
    );
  };

  //  handleChange(event) {
  //    setState({ searchvalue: event.target.value });
  //  }

  //  handleSubmit(event) {
  //    // alert('A name was submitted: ' + this.state.searchvalue);
  //    fetch(
  //      "http://localhost:3000/req/?title=" + state.searchValue + "&type=w"
  //    )
  //     .then((response) => response.text())
  //     .then((data) => this.setState({ explorepage: data }));
  //   event.preventDefault();
  // }

  // resetForm() {
  //   this.setState({ searchvalue: "" /*, explorepage: "" */ });
  // }

  // const explore = () => (
  //   <div className="page-container-explore">
  //     <p className="subtitle">Enter a few keywords to generate an article</p>

  //     <form className="explore-grid" onSubmit={handleSubmit}>
  //       <div className="split">
  //         <b style={{ marginBottom: "auto" }}>Topic Keyword</b>
  //         <input
  //           className="explore-search-bar"
  //           type="text"
  //           value={state.searchValue}
  //           onChange={handleChange}
  //         />
  //       </div>

  //       <div className="send-to-bottom">
  //         <input
  //           className="explore-gen-button explore-item"
  //           type="submit"
  //           value="GENERATE"
  //         />
  //       </div>
  //       <div className="send-to-bottom">
  //         <button
  //           className="explore-clear-button explore-item"
  //           type="button"
  //           onClick={this.resetForm}
  //         >
  //           {" "}
  //           CLEAR{" "}
  //         </button>
  //       </div>
  //       <div className="explore-article chosen-article">
  //         <div className="article">
  //           <Interweave content={this.state.explorePage} />
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );

  function guessed(x) {
    console.log(x);
    console.log(data.contentType);
    let stats = JSON.parse(localStorage.getItem("stats"));
    if (stats === null) {
      stats = { win: 0, loss: 0, streak: 0 };
    }
    if (x === data.contentType) {
      stats["win"] += 1;
      stats["streak"] += 1;
      localStorage.setItem("stats", JSON.stringify(stats));
      setState({ ...state, page: 1 });
    } else {
      stats["loss"] += 1;
      stats["streak"] = 0;
      localStorage.setItem("stats", JSON.stringify(stats));
      setState({ ...state, page: 2 });
    }
  }

  const home = () => setState({ ...state, page: 0 });

  // const handleClick = () => {
  //   setState((prevState) => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  // };

  const listenScrollEvent = (e) => {
    const elem = document.getElementById("scroll");

    if (elem.scrollTop > elem.clientHeight / 2) {
      setState({ ...state, mode: "down" });
    } else {
      setState({ ...state, mode: "up" });
    }
    // console.log("skrrrt");
  };

  // const componentDidMount() {
  //   // document.getElementById('scroll').addEventListener('scroll', this.listenScrollEvent);
  // }

  const scroll = () => {
    console.log(data.contentType);
    if (state.mode === "down") {
      document.getElementById("guess").scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
    }
  };

  const guess = () => {
    // const out = this.topbar()
    if (state.page === 0) {
      return <> {choose()}</>;
    } else {
      return <> {chosen()}</>;
    }
  };

  // const getpage = () => {
  //   switch (state.mode) {
  //     case "GES":
  //       return (

  //       );
  //     // case "LRN":
  //     //   return (
  //     //     <div className="page-container-learn" id="learn">
  //     //       {this.learn()}
  //     //     </div>
  //     //   );
  //     case "EXP":
  //       return (
  //         <div className="page-container-explore" id="explore">
  //           {/* {tis.explore()} */}
  //         </div>
  //       );
  //     // case "TUT":
  //     //   return (
  //     //     <div className="page-container-tutorial" id="tutorial">
  //     //       {" "}
  //     //       {this.tutorial2()}{" "}
  //     //     </div>
  //     //   );
  //     default:
  //       return <></>;
  //   }
  // };

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
            <Heading state={state} setState={setState} />{" "}
          </div>
          <div className="page-container-scroll" id="scroll">
            <div className="page-container-guess" id="guess">
              {guess()}
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

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   App.render();
// }

// setInterval(tick, 1000);

export default Pizzle;
