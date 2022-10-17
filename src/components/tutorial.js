import inconsistencies from "../assets/images/inconsistencies-icon.png";
import checkvibes from "../assets/images/check-vibes-icon.png";
import quotes from "../assets/images/quotes-icon.png";
import sloppywriting from "../assets/images/sloppy-writing-icon.png";
import logo from "../assets/images/wikipizzlelogo.png";

import style from "../assets/styles/tutorial.module.css";

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

  const getDots = () => {
    let out = <></>;
    for (let i = 0; i <= 3; i++) {
      out = (
        <>
          {" "}
          {out}{" "}
          <span
            onClick={() => setState((s) => ({ ...s, tutePage: i }))}
            className={
              style["dot"] +
              " " +
              (state.tutePage === i ? style["pressed"] : "")
            }
          ></span>{" "}
        </>
      );
    }
    return out;
  };

  return (
    <div className={style["tute"]}>
      <div className={style["tute-dots"]}>
        <button className={style["tute-btn"]} onClick={bopTutePage}>
          {"<"}
        </button>
        {getDots()}
        <button className={style["tute-btn"]} onClick={bumpTutePage}>
          {">"}
        </button>
      </div>
      <div className={style["tute-exit"]}>
        <button
          className={style["tute-btn"]}
          onClick={() => {
            setState((s) => ({ ...s, popup: false }));
          }}
        >
          &#x2715;
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
        Wikipizzle aims to help users learn more trivia and practice critical
        thinking through the use of text generation AI, GPT3. This educational
        project will test the limits of GPT3 to see if it can successfully fool
        you! We want to build awareness about misinformation online, and the
        implications of AI. We hope to encourage users to be discerning about
        information online, and whether what they're reading is trustworthy. And
        in the process, you guys can learn more general trivia as well. So...
        how do you discern false information?
      </p>
    </div>

    <div>
      <h1>6 ways to spot a generated or fake article</h1>
    </div>

    <div className={style["learn-flexbox"]}>
      <div className={`${style["learn-item"]} ${style["learn-img"]}`}>
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
      <div className={`${style["learn-item"]} ${style["learn-img"]}`}>
        <img src={checkvibes} alt={"" /*TODO*/} />
      </div>
      <div className={`${style["learn-item"]} ${style["learn-img"]}`}>
        <img src={sloppywriting} alt={"" /*TODO*/} />
      </div>
      <div className={style["learn-item"]}>
        <h2>3. Sloppy Writing</h2>
        <p>
          Poor grammar, spelling mistakes and stylistic choices, such as
          excessive capitalisation or the use of !!!, are a bad signs
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
      <div className={`${style["learn-item"]} ${style["learn-img"]}`}>
        <img src={quotes} alt={"" /*TODO*/} />
      </div>
    </div>
  </div>
);

const page2 = () => (
  <div className={`${style["tutorial-container"]} ${style["wrapper"]}`}>
    <div className={`${style["tutorial-intro"]} ${style["intro"]}`}>
      <h1>Tutorial 1/2 - Generated Article</h1>
      <p>
        Below is an article that's been generated by AI, where 
        we've highlighted some errors that are common with generated articles. 
        Have a read through yourself, and see if you can spot any more errors.
      </p>
    </div>

    <div className={style["tutorial-main"]}>
      <div className={style["tutorial-item-left"]}>
        <div className={`${style["box-article"]} ${style["box"]}`}>
          <h2>Joel's Hair</h2>
          <p>
            Joel's Hair is the name of an American rock band. The band was
            formed in Omaha, Nebraska in 1992 by vocalist/guitarist Joel
            Petersen and drummer Matt Bowen.
            {" "}<span className={style["blue-box"]}>
              The band has released three albums; the latest, "The Speed of
              Sound", in 2007. 
            </span>{" "}
            {" "}<span className={style["pink-box"]}>
              The band's name was inspired by Petersen's long hair.
            </span>{" "}
             In an interview with the Omaha World-Herald, Petersen recalled,
             {" "}<span className={style["yellow-box"]}>
              "I had long hair at the time and the bass player [at the time] was
              like, 'Dude, you need a band named Joel's Hair.' I was like, 'All
              right, that's a good band name.'"
            </span>{" "}
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
            In
            {" "}<span className={style["blue-box"]}>
              2000, the band released its third album, "The Speed of Sound"
            </span>{" "}
            . The album was in Omaha, and was again well-received by critics. In
            2007, the band released a live DVD, "Live at the Waiting Room".
          </p>
          <p>
            The band is currently inactive, with Petersen focusing on his solo
            project, The Petersen Effect.
          </p>
        </div>
      </div>

      <div className={style["tutorial-item-right"]}>
        <div className={`${style["blue-box"]} ${style["box"]}`}>
          <p>
            Inconsistent dates are used to refer to the same album release date.
            It says 2007 in the first section but later claims 2000.
          </p>
        </div>
        <div className={`${style["pink-box"]} ${style["box"]}`}>
          <p>
            Multiple successive short sentences have been used. 
            This can be much more common in generated articles than written articles.
          </p>
        </div>
        <div className={`${style["yellow-box"]} ${style["box"]}`}>
          <p>
            The bad flow of this sentence suggests the text could be generated
            and not written by a reputable source.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const page3 = () => (
  <div className={`${style["tutorial-container"]} ${style["wrapper"]}`}>
    <div className={`${style["tutorial-intro"]} ${style["intro"]}`}>
      <h1>Tutorial 2/2 - Generated Article</h1>
      <p>
        Here's another AI generated article, again with some errors highlighted.
        Skim through and see what else you notice.
      </p>
    </div>

    <div className={style["tutorial-main"]}>
      <div className={style["tutorial-item-left"]}>
        <div className={`${style["box-article"]} ${style["box"]}`}>
        <h2>Introduction</h2>
            <p>
              Scott Morrison (born 6 December 1967) is an Australian politician who 
              is the 27th and current Prime Minister of Australia, 
              {" "}<span className={style["blue-box"]}>
                serving since 24 August 2018.
              </span>{" "}
              He is a member of the Liberal Party and 
              {" "}<span className={style["blue-box"]}>
                was sworn in on 24 August 2018.
              </span>{" "}
              Morrison is the first Australian Prime Minister from the Liberal Party 
              since John Howard in 2005.
            </p> 
            <h2>Early Life</h2>
            <p>
              Morrison was born in Sydney, the son of a public servant and father of two. 
              {" "}<span className={style["blue-box"]}>
                He attended Waverley College and the Australian Catholic University,
              </span>{" "}
              before completing a Bachelor of Laws at the University of New South Wales. 
              {" "}<span className={style["blue-box"]}>
                Morrison attended Waverley College, an independent school in Sydney's 
                Inner West, before studying law at the Australian Catholic University. 
              </span>{" "}
              He then completed a Bachelor of Laws at the University of New South Wales.
            </p>
            <p>
              Morrison worked as a lawyer in private practice before being elected to the 
              Australian House of Representatives in 2001. He was Minister for Immigration 
              and Citizenship from 
              {" "}<span className={style["pink-box"]}>
                2013 to 2015,
              </span>{" "}
              and Minister for Social Services from 
              {" "}<span className={style["pink-box"]}>
                2007 to 2013.
              </span>{" "}
              He also served as Minister for Industry, Innovation and Science from 
              {" "}<span className={style["pink-box"]}>
                2013 to 2015.
              </span>{" "}
            </p>
            <p></p>
        </div>
      </div>

      <div className={style["tutorial-item-right"]}>
        <div className={`${style["blue-box"]} ${style["box"]}`}>
              <p>
                Recurring and redundant information can be an indicator that the 
                article has been generated rather than written.
              </p>
            </div>
            <div className={`${style["pink-box"]} ${style["box"]}`}>
              <p>
                These position and their dates haven't been listed in chronological order
              </p>
            </div>
        </div>
    </div>
  </div>
);

const page4 = () => (
  <div className={`${style["tutorial-container"]} ${style["wrapper"]}`}>
    <div className={`${style["tutorial-intro"]} ${style["intro"]}`}>
      <h1>You're good to go!</h1>
      <p>
        You now have the tools to go out and get Quizzling! The hints we've provided here 
        are just some of many ways to identify AI generated articles; as you keep playing, 
        we're sure you'll pick up new strategies and tells to help you out.
      </p>
      <div className={style["logo"]}>
        <img src={logo} alt="" />
        <p>
          Thanks for trying out Wikipizzle!
        </p>
      </div>
    </div>
  </div>
);
