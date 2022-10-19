import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Pizzle from "./pages/Pizzle";

export default function App() {
  const ops = ["p", "fr", "d", "w", "s", "n", "tr", "sh", "b", "z", "x", "ph"];
  const l = ops[Math.floor(Math.random() * ops.length)];
  const guessedToday = localStorage.getItem("guess");
  const lastGuess = new Date(
    parseInt(localStorage.getItem("lastGuess"))
  ).toDateString();
  const [state, setState] = useState({
    pizz: l,
    tutePage: 0,
    page:
      lastGuess !== new Date().toDateString()
        ? 0
        : guessedToday === "true"
        ? 1
        : 2,
    popup: localStorage.getItem("visited") === null,
    mode: "GES",
    searchValue: "",
    explorePage: "",
    piedata: { win: 1, loss: 1 },
  });
  localStorage.setItem("visited", true);

  const [data, setData] = useState({
    html: "loading...",
    title: "",
    contentType: false,
    loaded: false,
  });

  useEffect(() => {
    if (
      localStorage.getItem("data") === null ||
      new Date(parseInt(localStorage.getItem("dataTime"))).toDateString() !==
        new Date().toDateString()
    ) {
      fetch("http://localhost:3001/art")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then((art) => {
          setData({
            html: art.html,
            title: art.title,
            contentType: art.type === "w",
            loaded: art.type !== "error",
          });
          art.type !== "error"
            ? localStorage.setItem(
                "data",
                JSON.stringify({
                  html: art.html,
                  title: art.title,
                  contentType: art.type === "w",
                  loaded: true,
                })
              )
            : (() => {})();
          localStorage.setItem("dataTime", new Date().getTime());
        })
        .catch((error) =>
          setData((d) => ({ ...d, html: "Error: could not load article" }))
        );
    } else {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Pizzle state={state} setState={setState} data={data} />}
        />
        <Route
          path="/explore"
          element={<Explore state={state} setState={setState} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
