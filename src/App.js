import logo from "./assets/wikipizzlelogo.png";
import inconsistencies from "./assets/inconsistencies-icon.png";
import checkvibes from "./assets/check-vibes-icon.png";
import quotes from "./assets/quotes-icon.png";
import sloppywriting from "./assets/sloppy-writing-icon.png";

import "./App.css";
import React from "react";
import { Interweave } from "interweave";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.ops = ['p', 'fr', 'd', 'w', 's', 'n', 'tr', 'sh', 'b', 'z', 'x', 'ph'];
    this.l = this.ops[Math.floor(Math.random() * this.ops.length)];
    this.state = {
      tutepage: 0,
      page: 0,
      popup: false,
      mode: "GES",
      html: "loading...",
      title: "",
      searchvalue: "",
      explorepage: "",
    };
    this.epic = "TEXT TIME";

    this.state.mdtype = false;
    // this.state.md = getmd(this.state.mdtype);

    console.log("BAKEND!");

    fetch("http://localhost:3001/art")
      .then((response) => response.json())
      .then((data) => this.setState({ html: data.html, title: data.title }));

    fetch("http://localhost:3001/type")
      .then((response) => response.text())
      .then((data) => {
        this.mdtype = data === "w";
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

  learn = () => (
    <div className="learn-container wrapper">
      <div className="learn-intro intro">
        <h1>What is Wikipizzle?</h1>
        <p>
          {" "}
          Wikipizzle aims to help users learn more trivia and practice critical
          thinking through the use of text generation AI, GPT3. This educational
          project will test the limits of GPT3 to see if it can successfully
          fool you! We want to build awareness about misinformation online, and
          the implications of AI. We hope to encourage users to be discerning
          about information online, and whether what they're reading is
          trustworthy. And in the process, you guys can learn more general
          trivia as well. So... how do you discern false information?{" "}
        </p>
      </div>

      <div className="">
        <h1>6 ways to spot a generated or fake article</h1>
      </div>

      <div className="learn-flexbox">
        <div className="learn-item learn-img"><img src={inconsistencies}></img></div>
        <div className="learn-item">
          <h2>1. Inconsistencies</h2>
          <p>The two main inconsistencies to look out for are facts that contradicts itself throughout the article and headlines or titles that do not support the content and lack correlation.</p>
          <p></p>
        </div>
        <div className="learn-item">
          <h2>2. Check the Vibes</h2>
          <p>Does the tone of writing match the topic it is discussing? Does a professional article contain large amounts of satire or parody? Does the Wikipedia article contain degrading, nonsensical, very baised or humorous content?</p> 
          <p>There might be no harm intended, but it does have the potential to fool viewers. Apply common sense and look at the context.</p>
        </div>
        <div className="learn-item learn-img"><img src={checkvibes}></img></div>
        <div className="learn-item learn-img"><img src={sloppywriting}></img></div>
        <div className="learn-item">
          <h2>3. Sloppy Writing</h2>
          <p>Poor grammar, spelling mistakes and stylistic choices, such as excessive capitalisation or the use of !!!, are a bad signs{" "}</p>
        </div>
        <div className="learn-item">
          <h2>4. Absence of quotes or sources</h2>
          <p>The presence of quotes and sources might add an additional layer of integrity, potentially indicating more reliable information. External links to credible websites also boost the integrity of an article.</p>
        </div>
        <div className="learn-item learn-img"><img src={quotes}></img></div>
      </div>
    </div>
  );

  // TODO Make the first page mimic the landing page, and explain the game. Second and third pages give hints. Fourth page is explaining the dangers of misinformation and links to websites that help.
  tutorial2 = () => (
    <div className="tutorial-container wrapper">
      <div className="tutorial-intro intro">
        <h1>How did you go?</h1>
          <div className="answer-box incorrect">
            <h2 className="answer-box"> incorrect </h2>
            <h3 className="answer-box"> Deceived! This article was generated by AI. </h3>
          </div>
          
          {/* <div className="tutorial-guess">
            <div className="tutorial-guess-left"><p>Incorrect</p></div>
            <div className="tutorial-guess-right"><p>Deceived! This article was generated by AI.</p></div>
          </div> */}
        <p>How might you be able to tell? Take a look below on what you may have missed.</p>
      </div>

      <div className="tutorial-main">
        <div className="tutorial-item-left">
          <div className="box-article box">
            <h2>Joel's Hair</h2>
            <p>Joel's Hair is the name of an American rock band. The band was formed in Omaha, Nebraska in 1992 by vocalist/guitarist Joel Petersen and drummer Matt Bowen.{" "} <span className="blue-highlight"> The band has released three albums; the latest, "The Speed of Sound", in 2007</span>. The band's name was inspired by Petersen's long hair. In an interview with the Omaha World-Herald, Petersen recalled,<span className="pink-highlight">"I had long hair at the time and the bass player [at the time] was like, 'Dude, you need a band named Joel's Hair.' I was like, 'All right, that's a good band name.'"</span></p>
            <h2>Early Years</h2>
            <p>
              Joel's Hair began as a cover band in 1992, playing bars and clubs
              in the Omaha area. In 1994, the band released its first album,
              "The Joel's Hair EP", which was recorded live in the studio. The
              album was well-received, and the band began to tour the Midwest.
            </p>
            <h2>The Cut</h2>
            <p>In 1995, the band released its second album, "The Cut". The album was recorded in Chicago with producer Steve Albini, and was a critical success, receiving favorable reviews from publications such as Rolling Stone. The band continued to tour, and in 1997, they released a live album, "Live at the Oasis".</p>
            <h2>Present Day</h2>
            <p>In{" "}<span className="blue-highlight">2000, the band released its third album, "The Speed of Sound"</span>. The album was in Omaha, and was again well-received by critics. In 2007, the band released a live DVD, "Live at the Waiting Room".</p>
            <p>The band is currently inactive, with Petersen focusing on his solo project, <span className="green-highlight">The Petersen Effect</span>.</p>
          </div>
        </div>

        <div className="tutorial-item-right">
          <div className="blue-box box">
            <p>
              Inconsistent dates are used to refer to the same album release
              date. It says 2007 in the first section but later claims 2000.
            </p>
          </div>
          <div className="pink-box box"><p>The bad flow of this sentence suggests the text could be generated and not written by a reputable source.</p></div>
          <div className="green-box box"><p>This project name should be surrounded in quotation marks, "The Petersen Effect", similarly to the other album names.</p></div>
        </div>
      </div>

    </div>
  );

  tutorial4 = () => (
    <div className="tutorial-container wrapper">
      <div className="tutorial-intro intro">
        <h1>Tutorial 2/3</h1>
        <p></p>
      </div>

      <div className="tutorial-main">
        <div className="tutorial-item-left">
          <div className="box-article box">
            <h2>Introduction</h2>
            <p>
              The University of Queensland (UQ) is a public research university
              located in the city of Brisbane, the capital of the Australian
              state of Queensland. Founded in 1901, UQ is colloquially known as{" "}
              <span className="blue-highlight">the sandstone university</span>.
            </p>
            <p>
              UQ is considered one of Australia's leading universities, and is
              ranked as the 48th most reputable university in the world in the
              2016 Times Higher Education World University Rankings. UQ is
              ranked within the top 300 universities in thirteen indicators in
              the 2015-16 QS World University Rankings.
            </p>
            <h2>Campuses and Facilities</h2>
            <p>
              The main campus occupies much of the riverside inner suburb of St
              Lucia, southwest of the Brisbane CBD. Other UQ campuses and
              facilities are located throughout Queensland, the largest of which
              are the Gatton campus and the herbarium at Mount Coot-tha. UQ also
              has establishments overseas, such as the Brunei International
              School in Brunei Darussalam.
            </p>
            <p></p>
          </div>
        </div>

        <div className="tutorial-item-right">
          <div className="blue-box box">
            <p>
              The article should have used title case for "The Sandstone
              University" when referring and proper nouns.{" "}
            </p>
          </div>
          <div className="pink-box box">
            <p>2</p>
          </div>
          <div className="green-box box">
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );

  tutorial6 = () => (
    <div className="tutorial-container wrapper">
      <div className="tutorial-intro intro">
        <h1>How did you go?</h1>
        <div className="tutorial-guess tut-correct">
          <div className="tutorial-guess-left correct">
            <p>Correct!</p>
          </div>
          <div className="tutorial-guess-right">
            <p>Great job! This article is from Wikipedia.</p>
          </div>
        </div>
      </div>

      <div className="tutorial-main">
        <div className="tutorial-item-left">
          <div className="box-article box">
            <h2>Kolonos Hill</h2>
            <p>
              Kolonos Hill (/kə'loʊnɒs/; Greek: Λόφος Κολωνού) is a hill in
              Central Greece. It is located in the narrow coastal passage known
              as Thermopylae, and is near the city of Lamia.
            </p>

            <h2>History</h2>
            <p>
              The hill is best known as the site of the final stand of the 300
              Spartans during the Battle of Thermopylae in 480 BC.[1] In 1939,
              Spyridon Marinatos, a Greek archaeologist found large numbers of
              Persian arrows around the hill, which changed the hitherto
              accepted identification of the site where the Greeks had fallen,
              slain by Persian arrows.[1][2]
            </p>
            <p>
              A commemorative stone was placed on the site in antiquity, but the
              original stone has not survived. In 1955, a new stone was erected,
              with Simonides's epigram engraved on it.[3]
            </p>
            <h2>References</h2>
            <p></p>
          </div>
        </div>
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
              {this.mdtype
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
      "http://localhost:3001/req/?title=" + this.state.searchvalue + "&type=w"
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
            value={this.state.searchvalue}
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
            <Interweave content={this.state.explorepage} />
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
    if (x === this.mdtype) {
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
    console.log(this.mdtype);
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
      case "LRN":
        return (
          <div className="page-container-learn" id="learn">
            {this.learn()}
          </div>
        );
      case "EXP":
        return (
          <div className="page-container-explore" id="explore">
            {this.explore()}
          </div>
        );
      case "TUT":
        return (
          <div className="page-container-tutorial" id="tutorial">
            {" "}
            {this.tutorial2()}{" "}
          </div>
        );
      default:
        return <></>;
    }
  };

  getTuteContent = () => {
    switch (this.state.tutepage) {
      case 0:
        return this.learn();
      case 1:
        return this.tutorial2();
      case 2:
        return this.tutorial4();
      case 3:
        return this.tutorial6();
      case 4:
        return this.tutorial6();
      default:
        return <></>;
    }
  };

  bumpTutePage() {
    if (this.state.tutepage === 4) return;
    this.setState({ tutepage: this.state.tutepage + 1 });
  }

  bopTutePage() {
    if (this.state.tutepage === 0) return;
    this.setState({ tutepage: this.state.tutepage - 1 });
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

export default App;
