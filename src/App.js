import logo from "./assets/wikipizzlelogo.png";
import "./App.css";
import React from "react";
import { Interweave } from "interweave";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, mode: "GES", html: "loading..." };
    this.epic = "TEXT TIME";

    this.state.mdtype = false;
    // this.state.md = getmd(this.state.mdtype);

    console.log("BAKEND!");

    // fetch("http://localhost:3001/art")
    //   .then((response) => response.text())
    //   .then((data) => this.setState({ html: data }));

    // fetch("http://localhost:3001/type")
    //   .then((response) => response.text())
    //   .then((data) => {
    //     this.mdtype = data == "w";
    //   });

    console.log("front!");

    // This binding is necessary to make `this` work in the callback
    this.guessed = this.guessed.bind(this);
    this.home = this.home.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.wholePage = this.wholePage.bind(this);
    // this.switchMode = this.switchMode.bind(this);
  }

  head = (
    <p className="subtitle">
      Wikipedia or AI-Generated? Take a guess and test your skills!
    </p>
  );

  topbut = (mode, text) =>
    // <div className='button-container'> <button className="head-button" role="button" onClick={() => this.setState({mode: mode})}><span>{text}</span> </button></div>
    this.state.mode == mode ? (
      <button
        className="head-button head-button-active"
        role="button"
        onClick={() => this.setState({ mode: mode })}
      >
        {text}{" "}
      </button>
    ) : (
      <button
        className="head-button"
        role="button"
        onClick={() => this.setState({ mode: mode })}
      >
        {text}{" "}
      </button>
    );

  topbar = () => (
    <div className="logo-header">
      <div className="head-logo-container">
        <img src={logo} alt="" />
        <a>Wikipizzle</a>
      </div>

      <div className="head-button-container">
        <ul>
          <li> {this.topbut("GES", "Quizzle")} </li>
          <li> {this.topbut("EXP", "Explore")} </li>
          <li> {this.topbut("LRN", "Learn More")} </li>
        </ul>
      </div>

      <div className="head-tute-container">
        <button role="button" onClick={() => this.setState({ mode: "TUT" })}>
          {" "}
          ?{" "}
        </button>
      </div>
    </div>
  );

  explore = () => (
    <div className="explore-container wrapper">
      <form id="explore-form">
        <div className="form">
          <label id="inputLable">Input keywords:</label>
          <input id="inputField" type="text" maxlength="50"></input>
        </div>
      </form>
      {/* function othername() {
    var input = document.getElementById("userInput").value;
    alert(input); */}
    </div>
  );

  learn = () => (
    <div className="learn-container wrapper">
      <div className="learn-intro intro">
        <h1>What is Wikipizzle?</h1>
        <p>
          Wikipizzle is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed scelerisque nulla libero, a pulvinar risus egestas in. Duis sed
          mauris velit. Proin condimentum varius odio nec tincidunt. Vivamus
          tortor neque, sollicitudin id ante sit amet, hendrerit lobortis metus.
          Nam sagittis finibus elit, at faucibus nisl sagittis id. Nulla
          facilisi. Duis nec massa eu nisl feugiat lobortis. Donec tellus odio,
          scelerisque lacinia ex eu, consectetur porttitor turpis. Etiam tellus
          velit, cursus in fermentum eu, euismod et velit. Nullam a augue at
          turpis porta convallis. Cras interdum, ex at cursus cursus, purus
          felis consequat arcu, vel auctor nisi erat ut purus.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>


      <div className="">
        <h1>6 ways to spot a generated or fake article</h1>
      </div>

      <div className="learn-flexbox">
        <div className="learn-item"></div>
        <div className="learn-item">
          <h2>1. Inconsistencies</h2>
          <p>
            The two main inconsistencies to look out for are facts that
            contradicts itself throughout the article and headlines or titles
            that do not support the content and lack correlation
          </p>
        </div>
        <div className="learn-item">
          <h2>2. Check the Vibes</h2>
          <p>Does the tone of writing match the topic it is discussing?</p>
          <p>
            Does a professional article contain large amounts of satire or
            parody? Does the Wikipedia article contain degrading, nonsensical,
            very baised or humorous content? There might be no harm intended,
            but it does have the potential to fool viewers. Apply common sense
            and look at the context.
          </p>
          <p>
            Is the article informative or does it create more questions rather
            then answering them?
          </p>
        </div>
        <div className="learn-item"></div>
        <div className="learn-item"></div>
        <div className="learn-item">
          <h2>3. Sloppy Writing</h2>
          <p>Poor grammar, spelling mistakes</p>
          <p>
            Stylistic choices, such as excessive capitalisation or the use of
            !!!, are a sign that the{" "}
          </p>
        </div>
        <div className="learn-item">
          <h2>4. Absence of quotes or sources</h2>
          <p>
            The presence of quotes and sources might add an additional layer of
            integrity, potentially indicating more reliable information.
            External links to credible websites also boost the integrity of an
            article.
          </p>
        </div>
        <div className="learn-item"></div>
      </div>
    </div>
  );

  tutorial2 = () => (
    <div className="tutorial-container wrapper">
      <div className="tutorial-intro intro">
        <h1>How did you go?</h1>
          <div className="tutorial-guess">
            <div className="tutorial-guess-left"><p>Incorrect</p></div>
            <div className="tutorial-guess-right"><p>Deceived! Today's article was generated by AI.</p></div>
          </div>
        <p>How might you be able to tell? Take a look below on what you may have missed.</p>
      </div>

      <div className="tutorial-main">
        <div className="tutorial-item-left">
          <div className="box-article box">
            <h2>Joel's Hair</h2>
            <p>Joel's Hair is the name of an American rock band. The band was formed in Omaha, Nebraska in 1992 by vocalist/guitarist Joel Petersen and drummer Matt Bowen.{" "} <span className="blue-highlight"> The band has released three albums; the latest, "The Speed of Sound", in 2007</span>. The band's name was inspired by Petersen's long hair. In an interview with the Omaha World-Herald, Petersen recalled, "I had long hair at the time and the bass player [at the time] was like, 'Dude, you need a band named Joel's Hair.' I was like, 'All right, that's a good band name.'"</p>
            <h2>Early Years</h2>
            <p>Joel's Hair began as a cover band in 1992, playing bars and clubs in the Omaha area. In 1994, the band released its first album, "The Joel's Hair EP", which was recorded live in the studio. The album was well-received, and the band began to tour the Midwest.</p>
            <h2>The Cut</h2>
            <p>In 1995, the band released its second album, "The Cut". The album was recorded in Chicago with producer Steve Albini, and was a critical success, receiving favorable reviews from publications such as Rolling Stone and Spin. The band continued to tour, and in 1997, they released a live album, "Live at the Oasis".</p>
            <h2>Present Day</h2>
            <p>In{" "}<span className="blue-highlight">2000, the band released its third album, "The Speed of Sound"</span>. The album was in Omaha, and was again well-received by critics. In 2007, the band released a live DVD, "Live at the Waiting Room".</p>
            <p>The band is currently inactive, with Petersen focusing on his solo project, The Petersen Effect.</p>
          </div>
        </div>

        <div className="tutorial-item-right">
          <div className="blue-box box">
            <p>Inconsistent dates are used to refer to the same album release date. It says 2007 in the first section but later claims 2000.</p>
          </div>
          <div className="pink-box box">2</div>
          <div className="green-box box">3</div>
        </div>
      </div>


    </div>
  );

  tutorial = () => (
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
              located in the city of Brisbane, the capital of the Australian state
              of Queensland. Founded in 1901, UQ is colloquially known as{" "}
              <span className="blue-highlight">the sandstone university</span>.
            </p>
            <p>
              UQ is considered one of Australia's leading universities, and is
              ranked as the 48th most reputable university in the world in the
              2016 Times Higher Education World University Rankings. UQ is ranked
              within the top 300 universities in thirteen indicators in the
              2015-16 QS World University Rankings.
            </p>
            <h2>Campuses and Facilities</h2>
            <p>The main campus occupies much of the riverside inner suburb of St
              Lucia, southwest of the Brisbane CBD. Other UQ campuses and
              facilities are located throughout Queensland, the largest of which
              are the Gatton campus and the herbarium at Mount Coot-tha. UQ also
              has establishments overseas, such as the Brunei International School
              in Brunei Darussalam.
            </p>
            <p>
              Cras dictum orci interdum nibh laoreet, ac rutrum ipsum rutrum.
              Aenean aliquam velit eu purus aliquet pretium. In ut ipsum ut justo
              blandit tristique ac vel urna. Etiam molestie ligula sapien, nec
              pharetra enim suscipit et. Praesent ultrices velit id ligula
              lobortis consequat. Praesent id tortor lorem. Vivamus vestibulum
              metus dui, at efficitur metus egestas quis. Nullam malesuada justo
              enim, feugiat lobortis quam convallis ac. Nullam nec justo nunc.
              Duis rutrum felis a ultrices viverra. In luctus accumsan turpis,
              fermentum tincidunt erat auctor id. Mauris semper nunc quis massa
              suscipit placerat. Integer vel semper urna.
            </p>
          </div>
        </div>

        <div className="tutorial-item-right">
          <div className="blue-box box">
            <p>
              The article should have used title case for "The Sandstone
              University" when referring and proper nouns.
            </p>
          </div>
          <div className="pink-box box">2</div>
          <div className="green-box box">3</div>
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
        <div className="button-container" style={{ float: "left" }}>
          {" "}
          <button
            className="button1"
            role="button"
            onClick={() => this.guessed(true)}
          >
            <span>WIKIPEDIA</span>
          </button>{" "}
        </div>
        <div className="button-container" style={{ float: "right" }}>
          {" "}
          <button
            className="button2"
            role="button"
            onClick={() => this.guessed(false)}
          >
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
        <button className="button1" role="button" onClick={() => this.home()}>
          <span>HOME</span>
        </button>
      </div>
    </div>
  );

  chosen = () => (
    <div className="app">
      {this.head}

      <div className="chosen-container wrapper">
        <div className="left-wrapper">
          <div className="chosen-article">
            <div className="article">
              <Interweave content={this.state.html} />
            </div>
          </div>
          <div className="learn-more">asd</div>
        </div>

        <div className="right-wrapper">
          <div className="answer-box">
            <h2>{this.state.page == 1 ? "Correct" : "Incorrect"}</h2>
            <h3>
              {this.state.page == 1
                ? "You're right!"
                : "You have been deceived!"}{" "}
              Today's article{" "}
              {this.mdtype
                ? "was an actual Wikipedia article"
                : "was generated by AI"}
            </h3>
          </div>
          <div className="stats">epicc</div>

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

  guessed(x) {
    if (x == this.mdtype) {
      this.setState({ page: 1 });
    } else {
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
    if (this.state.mode == "down") {
      document.getElementById("guess").scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
    }
  };

  guess = () => {
    // const out = this.topbar()
    if (this.state.page == 0) {
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
            {" "}
            {this.guess()}{" "}
          </div>
        );
      case "LRN":
        return (
          <div className="page-container-learn" id="learn">
            {" "}
            {this.learn()}{" "}
          </div>
        );
      case "EXP":
        return (
          <div className="page-container-explore" id="explore">
            {" "}
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

  wholePage = () => {
    return (
      <div className="page-container">
        <div className="page-container-head"> {this.topbar()} </div>
        <div className="page-container-scroll" id="scroll">
          {this.getpage()}
          {/* <div className='page-container-switch' onClick={this.scroll}> 
        {(this.state.mode == 'up') ? <div className='page-container-switch-button'>Exploration Mode</div> :  <div className='page-container-switch-button'>Play Mode</div>}
      </div> */}
        </div>
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
