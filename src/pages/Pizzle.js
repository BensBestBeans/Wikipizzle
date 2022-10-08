import logo from "../assets/images/wikipizzlelogo.png";
import inconsistencies from "../assets/images/inconsistencies-icon.png";
import checkvibes from "../assets/images/check-vibes-icon.png";
import quotes from "../assets/images/quotes-icon.png";
import sloppywriting from "../assets/images/sloppy-writing-icon.png";

import "../assets/styles/App.css";
import React from "react";
import { Interweave } from "interweave";
import { tutorial } from "../components/tutorial";

class Pizzle extends React.Component {
  constructor(props) {
    super(props);
    this.ops = ["p", "fr", "d", "w"];
    this.l = this.ops[Math.floor(Math.random() * this.ops.length)];
    this.state = {
      tutePage: 0,
      page: 0,
      popup: false,
      mode: "GES",
      html: "loading...",
      title: "",
      searchValue: "",
      explorePage: "",
      contentType: false,
    };
    this.epic = "TEXT TIME";

    // this.state.md = getmd(this.state.mdtype);
    // this.state.contentType = false;
    console.log("BAKEND!");

    fetch("http://localhost:3000/art")
      .then((response) => response.json())
      .then((data) => this.setState({ html: data.html, title: data.title }));

    fetch("http://localhost:3000/type")
      .then((response) => response.text())
      .then((data) => {
        this.contentType = data === "w";
      });

    console.log("front!");
    console.log(this.state.title);

    // This binding is necessary to make `this` work in the callback
    this.guessed = this.guessed.bind(this);
    this.home = this.home.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.wholePage = this.wholePage.bind(this);
    // this.switchMode = this.switchMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.bopTutePage = this.bopTutePage.bind(this);
    this.bumpTutePage = this.bumpTutePage.bind(this);
  }

  head = (
    <p className="subtitle">
      Wikipedia or AI-Generated? Take a guess and test your skills!
    </p>
  );

  topbut = (mode, text) =>
    // <div className='button-container'> <button className="head-button" role="button" onClick={() => this.setState({mode: mode})}><span>{text}</span> </button></div>
    this.state.mode === mode ? (
      <button
        className="head-button head-button-active"
        onClick={() => this.setState({ mode: mode })}
      >
        {text}{" "}
      </button>
    ) : (
      <button
        className="head-button"
        onClick={() => this.setState({ mode: mode })}
      >
        {text}{" "}
      </button>
    );

  topbar = () => (
    <div className="logo-header">
      <div className="head-logo-container">
        <img src={logo} alt="" />
        <a href="https://www.wikipedia.org/">Wiki{this.l}izzle</a>
      </div>

      <div className="head-button-container">
        <ul>
          <li> {this.topbut("GES", "Quizzle")} </li>
          <li> {this.topbut("EXP", "Explore")} </li>
          {/* <li> {this.topbut("LRN", "Learn More")} </li> */}
        </ul>
      </div>

      <div className="head-tute-container">
        <button
          className="question-mark"
          style={{ margin: "20px" }}
          onClick={() => this.setState({ popup: !this.state.popup })}
        >
          {" "}
          ?{" "}
        </button>
      </div>
    </div>
  );

  choose = () => (
    <div className="app">
      {/* <header> {this.topbar()} </header> */}
      {this.head}

      <div className="article-container">
        <div className="article">
          <Interweave content={this.state.html} />
        </div>
      </div>

      <div className="ins">
        <div className="button-container">
          {" "}
          <button className="button1" onClick={() => this.guessed(true)}>
            <span>WIKIPEDIA</span>
          </button>{" "}
        </div>
        <div className="button-container">
          {" "}
          <button className="button2" onClick={() => this.guessed(false)}>
            <span>AI GENERATED</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );

  correct = (
    <div className="app">
      <header></header>
      {this.head}

      <div className="answer-box">something</div>

      <div className="article"> something</div>
      <div className="ins">
        <button className="button1" onClick={() => this.home()}>
          <span>HOME</span>
        </button>
      </div>
    </div>
  );

  chosen = () => {
    const stats = JSON.parse(localStorage.getItem("stats"));
    const answerbox =
      "answer-box " + (this.state.page === 1 ? "correct" : "incorrect");
    return (
      <div className="app">
        {this.head}

        <div className="chosen-container">
          <div className={answerbox}>
            <h2 className="answer-box">
              {this.state.page === 1 ? "Correct" : "Incorrect"}
            </h2>
            <h3 className="answer-box">
              {this.state.page === 1
                ? "You're right!"
                : "You have been deceived!"}{" "}
              Today's article{" "}
              {this.contentType
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
                <Interweave content={this.state.html} />
              </div>
            </div>
            <div className="learn-more">
              Want to find out more about this topic?
              <a
                target="_blank"
                href={`https://letmegooglethat.com/?q=${this.state.title}`}
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

  handleChange(event) {
    this.setState({ searchvalue: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.searchvalue);
    fetch(
      "http://localhost:3000/req/?title=" + this.state.searchValue + "&type=w"
    )
      .then((response) => response.text())
      .then((data) => this.setState({ explorepage: data }));
    event.preventDefault();
  }

  resetForm() {
    this.setState({ searchvalue: "" /*, explorepage: "" */ });
  }

  explore = () => (
    <div className="page-container-explore">
      <p className="subtitle">Enter a few keywords to generate an article</p>

      <form className="explore-grid" onSubmit={this.handleSubmit}>
        <div className="split">
          <b style={{ marginBottom: "auto" }}>Topic Keyword</b>
          <input
            className="explore-search-bar"
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
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
            onClick={this.resetForm}
          >
            {" "}
            CLEAR{" "}
          </button>
        </div>
        <div className="explore-article chosen-article">
          <div className="article">
            <Interweave content={this.state.explorePage} />
          </div>
        </div>
      </form>
    </div>
  );

  guessed(x) {
    let stats = JSON.parse(localStorage.getItem("stats"));
    if (stats === null) {
      stats = { win: 0, loss: 0, streak: 0 };
    }
    if (x === this.contentType) {
      stats["win"] += 1;
      stats["streak"] += 1;
      localStorage.setItem("stats", JSON.stringify(stats));
      this.setState({ page: 1 });
    } else {
      stats["loss"] += 1;
      stats["streak"] = 0;
      localStorage.setItem("stats", JSON.stringify(stats));
      this.setState({ page: 2 });
    }
  }

  home() {
    this.setState({ page: 0 });
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  listenScrollEvent = (e) => {
    const elem = document.getElementById("scroll");

    if (elem.scrollTop > elem.clientHeight / 2) {
      this.setState({ mode: "down" });
    } else {
      this.setState({ mode: "up" });
    }
    // console.log("skrrrt");
  };

  componentDidMount() {
    // document.getElementById('scroll').addEventListener('scroll', this.listenScrollEvent);
  }

  scroll = () => {
    console.log(this.contentType);
    if (this.state.mode === "down") {
      document.getElementById("guess").scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
    }
  };

  guess = () => {
    // const out = this.topbar()
    if (this.state.page === 0) {
      return <> {this.choose()}</>;
    } else {
      return <> {this.chosen()}</>;
    }
  };

  getpage = () => {
    switch (this.state.mode) {
      case "GES":
        return (
          <div className="page-container-guess" id="guess">
            {this.guess()}
          </div>
        );
      // case "LRN":
      //   return (
      //     <div className="page-container-learn" id="learn">
      //       {this.learn()}
      //     </div>
      //   );
      case "EXP":
        return (
          <div className="page-container-explore" id="explore">
            {this.explore()}
          </div>
        );
      // case "TUT":
      //   return (
      //     <div className="page-container-tutorial" id="tutorial">
      //       {" "}
      //       {this.tutorial2()}{" "}
      //     </div>
      //   );
      default:
        return <></>;
    }
  };

  getTuteContent = () => {
    return tutorial(this.state.tutePage);
  };

  bumpTutePage() {
    if (this.state.tutePage === 4) return;
    this.setState({ tutePage: this.state.tutePage + 1 });
  }

  bopTutePage() {
    if (this.state.tutePage === 0) return;
    this.setState({ tutePage: this.state.tutePage - 1 });
  }

  tute = () => (
    <div className="tute">
      <div className="tute-dots">
        <button className="tute-btn" onClick={this.bopTutePage}>
          {" "}
          {"<"}{" "}
        </button>
        ...
        <button className="tute-btn" onClick={this.bumpTutePage}>
          {" "}
          {">"}{" "}
        </button>
      </div>
      <div className="tute-exit">
        <button
          className="tute-btn"
          onClick={() => {
            this.setState({ popup: false });
          }}
        >
          {" "}
          &#x2715;{" "}
        </button>
      </div>
      <div className="tute-content">{this.getTuteContent()}</div>
    </div>
  );

  wholePage = () => {
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
          <div className="page-container-head"> {this.topbar()} </div>
          <div className="page-container-scroll" id="scroll">
            {this.getpage()}
          </div>
        </div>

        {this.state.popup ? (
          <div className="page-container-tute">{this.tute()}</div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  render() {
    return this.wholePage();
  }
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
