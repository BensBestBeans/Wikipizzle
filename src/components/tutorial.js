import inconsistencies from "../assets/images/inconsistencies-icon.png";
import checkvibes from "../assets/images/check-vibes-icon.png";
import quotes from "../assets/images/quotes-icon.png";
import sloppywriting from "../assets/images/sloppy-writing-icon.png";

import style from "../assets/styles/tutorial.module.css";

// import styles from "../assets/styles/App.css";

export function Tutorial({ state, setState }) {
  const getTuteContent = () => {
    return tute(state.tutePage);
  };

  const bumpTutePage = () => {
    if (state.tutePage === 3) return;
    setState((s) => ({ ...s, tutePage: s.tutePage + 1 }));
  };

  const bopTutePage = () => {
    if (state.tutePage === 0) return;
    setState((s) => ({ ...s, tutePage: s.tutePage - 1 }));
  };

  return (
    <div className={style["tute"]}>
      <div className={style["tute-dots"]}>
        <button className={style["tute-btn"]} onClick={bopTutePage}>
          {" "}
          {"<"}{" "}
        </button>
        ...
        <button className={style["tute-btn"]} onClick={bumpTutePage}>
          {" "}
          {">"}{" "}
        </button>
      </div>
      <div className={style["tute-exit"]}>
        <button
          className={style["tute-btn"]}
          onClick={() => {
            setState((s) => ({ ...s, popup: false }));
          }}
        >
          {" "}
          &#x2715;{" "}
        </button>
      </div>
      <div className={style["tute-content"]}>{getTuteContent()}</div>
    </div>
  );
}

const tute = (tutorial) => {
  switch (tutorial) {
    case 0:
      return page1();
    case 1:
      return page2();
    case 2:
      return page3();
    case 3:
      return page4();
    default:
      return <></>;
  }
};

const page1 = () => (
  <div className={style["wrapper"]}>
    <div className={style["intro"]}>
      <h1>What is Wikipizzle?</h1>
      <p>
        {" "}
        Wikipizzle aims to help users learn more trivia and practice critical
        thinking through the use of text generation AI, GPT3. This educational
        project will test the limits of GPT3 to see if it can successfully fool
        you! We want to build awareness about misinformation online, and the
        implications of AI. We hope to encourage users to be discerning about
        information online, and whether what they're reading is trustworthy. And
        in the process, you guys can learn more general trivia as well. So...
        how do you discern false information?{" "}
      </p>
    </div>

    <div>
      <h1>6 ways to spot a generated or fake article</h1>
    </div>

    <div className={style["learn-flexbox"]}>
      <div className={style["learn-item learn-img"]}>
        <img src={inconsistencies} alt={"" /*TODO*/} />
      </div>
      <div className={style["learn-item"]}>
        <h2>1. Inconsistencies</h2>
        <p>
          The two main inconsistencies to look out for are facts that
          contradicts itself throughout the article and headlines or titles that
          do not support the content and lack correlation.
        </p>
        <p></p>
      </div>
      <div className={style["learn-item"]}>
        <h2>2. Check the Vibes</h2>
        <p>
          Does the tone of writing match the topic it is discussing? Does a
          professional article contain large amounts of satire or parody? Does
          the Wikipedia article contain degrading, nonsensical, very baised or
          humorous content?
        </p>
        <p>
          There might be no harm intended, but it does have the potential to
          fool viewers. Apply common sense and look at the context.
        </p>
      </div>
      <div className={style["learn-item learn-img"]}>
        <img src={checkvibes} alt={"" /*TODO*/} />
      </div>
      <div className={style["learn-item learn-img"]}>
        <img src={sloppywriting} alt={"" /*TODO*/} />
      </div>
      <div className={style["learn-item"]}>
        <h2>3. Sloppy Writing</h2>
        <p>
          Poor grammar, spelling mistakes and stylistic choices, such as
          excessive capitalisation or the use of !!!, are a bad signs{" "}
        </p>
      </div>
      <div className={style["learn-item"]}>
        <h2>4. Absence of quotes or sources</h2>
        <p>
          The presence of quotes and sources might add an additional layer of
          integrity, potentially indicating more reliable information. External
          links to credible websites also boost the integrity of an article.
        </p>
      </div>
      <div className={style["learn-item learn-img"]}>
        <img src={quotes} alt={"" /*TODO*/} />
      </div>
    </div>
  </div>
);

const page2 = () => (
  <div className={style["tutorial-container wrapper"]}>
    <div className={style["tutorial-intro intro"]}>
      <h1>How did you go?</h1>
      <div className={style["answer-box incorrect"]}>
        <h2 className={style["answer-box"]}> incorrect </h2>
        <h3 className={style["answer-box"]}>
          {" "}
          Deceived! This article was generated by AI.{" "}
        </h3>
      </div>

      {/* <div className={style["tutorial-guess">
            <div className={style["tutorial-guess-left"><p>Incorrect</p></div>
            <div className={style["tutorial-guess-right"><p>Deceived! This article was generated by AI.</p></div>
          </div> */}
      <p>
        How might you be able to tell? Take a look below on what you may have
        missed.
      </p>
    </div>

    <div className={style["tutorial-main"]}>
      <div className={style["tutorial-item-left"]}>
        <div className={style["box-article box"]}>
          <h2>Joel's Hair</h2>
          <p>
            Joel's Hair is the name of an American rock band. The band was
            formed in Omaha, Nebraska in 1992 by vocalist/guitarist Joel
            Petersen and drummer Matt Bowen.{" "}
            <span className={style["blue-highlight"]}>
              {" "}
              The band has released three albums; the latest, "The Speed of
              Sound", in 2007
            </span>
            . The band's name was inspired by Petersen's long hair. In an
            interview with the Omaha World-Herald, Petersen recalled,
            <span className={style["pink-highlight"]}>
              "I had long hair at the time and the bass player [at the time] was
              like, 'Dude, you need a band named Joel's Hair.' I was like, 'All
              right, that's a good band name.'"
            </span>
          </p>
          <h2>Early Years</h2>
          <p>
            Joel's Hair began as a cover band in 1992, playing bars and clubs in
            the Omaha area. In 1994, the band released its first album, "The
            Joel's Hair EP", which was recorded live in the studio. The album
            was well-received, and the band began to tour the Midwest.
          </p>
          <h2>The Cut</h2>
          <p>
            In 1995, the band released its second album, "The Cut". The album
            was recorded in Chicago with producer Steve Albini, and was a
            critical success, receiving favorable reviews from publications such
            as Rolling Stone. The band continued to tour, and in 1997, they
            released a live album, "Live at the Oasis".
          </p>
          <h2>Present Day</h2>
          <p>
            In{" "}
            <span className={style["blue-highlight"]}>
              2000, the band released its third album, "The Speed of Sound"
            </span>
            . The album was in Omaha, and was again well-received by critics. In
            2007, the band released a live DVD, "Live at the Waiting Room".
          </p>
          <p>
            The band is currently inactive, with Petersen focusing on his solo
            project,{" "}
            <span className={style["green-highlight"]}>
              The Petersen Effect
            </span>
            .
          </p>
        </div>
      </div>

      <div className={style["tutorial-item-right"]}>
        <div className={style["blue-box box"]}>
          <p>
            Inconsistent dates are used to refer to the same album release date.
            It says 2007 in the first section but later claims 2000.
          </p>
        </div>
        <div className={style["pink-box box"]}>
          <p>
            The bad flow of this sentence suggests the text could be generated
            and not written by a reputable source.
          </p>
        </div>
        <div className={style["green-box box"]}>
          <p>
            This project name should be surrounded in quotation marks, "The
            Petersen Effect", similarly to the other album names.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const page3 = () => (
  <div className={style["tutorial-container wrapper"]}>
    <div className={style["tutorial-intro intro"]}>
      <h1>Tutorial 2/3</h1>
      <p></p>
    </div>

    <div className={style["tutorial-main"]}>
      <div className={style["tutorial-item-left"]}>
        <div className={style["box-article box"]}>
          <h2>Introduction</h2>
          <p>
            The University of Queensland (UQ) is a public research university
            located in the city of Brisbane, the capital of the Australian state
            of Queensland. Founded in 1901, UQ is colloquially known as{" "}
            <span className={style["blue-highlight"]}>
              the sandstone university
            </span>
            .
          </p>
          <p>
            UQ is considered one of Australia's leading universities, and is
            ranked as the 48th most reputable university in the world in the
            2016 Times Higher Education World University Rankings. UQ is ranked
            within the top 300 universities in thirteen indicators in the
            2015-16 QS World University Rankings.
          </p>
          <h2>Campuses and Facilities</h2>
          <p>
            The main campus occupies much of the riverside inner suburb of St
            Lucia, southwest of the Brisbane CBD. Other UQ campuses and
            facilities are located throughout Queensland, the largest of which
            are the Gatton campus and the herbarium at Mount Coot-tha. UQ also
            has establishments overseas, such as the Brunei International School
            in Brunei Darussalam.
          </p>
          <p></p>
        </div>
      </div>

      <div className={style["tutorial-item-right"]}>
        <div className={style["blue-box box"]}>
          <p>
            The article should have used title case for "The Sandstone
            University" when referring and proper nouns.{" "}
          </p>
        </div>
        <div className={style["pink-box box"]}>
          <p>2</p>
        </div>
        <div className={style["green-box box"]}>
          <p>3</p>
        </div>
      </div>
    </div>
  </div>
);

const page4 = () => (
  <div className={style["tutorial-container wrapper"]}>
    <div className={style["tutorial-intro intro"]}>
      <h1>How did you go?</h1>
      <div className={style["tutorial-guess tut-correct"]}>
        <div className={style["tutorial-guess-left correct"]}>
          <p>Correct!</p>
        </div>
        <div className={style["tutorial-guess-right"]}>
          <p>Great job! This article is from Wikipedia.</p>
        </div>
      </div>
    </div>

    <div className={style["tutorial-main"]}>
      <div className={style["tutorial-item-left"]}>
        <div className={style["box-article box"]}>
          <h2>Kolonos Hill</h2>
          <p>
            Kolonos Hill (/kə'loʊnɒs/; Greek: Λόφος Κολωνού) is a hill in
            Central Greece. It is located in the narrow coastal passage known as
            Thermopylae, and is near the city of Lamia.
          </p>

          <h2>History</h2>
          <p>
            The hill is best known as the site of the final stand of the 300
            Spartans during the Battle of Thermopylae in 480 BC.[1] In 1939,
            Spyridon Marinatos, a Greek archaeologist found large numbers of
            Persian arrows around the hill, which changed the hitherto accepted
            identification of the site where the Greeks had fallen, slain by
            Persian arrows.[1][2]
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
