import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Pizzle from "./pages/Pizzle";

export default function App() {
  const ops = ["p", "fr", "d", "w"];
  const l = ops[Math.floor(Math.random() * ops.length)];
  const [state, setState] = useState({
    pizz: l,
    tutePage: 0,
    page: 0,
    popup: false,
    mode: "GES",
    searchValue: "",
    explorePage: "",
  });

  const [data, setData] = useState({
    html: "loading...",
    title: "",
    contentType: false,
  });

  useEffect(() => {
    fetch("http://localhost:3001/art")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((art) => {
        console.log(art);
        setData({
          html: art.html,
          title: art.title,
          contentType: art.type === "w",
        });
      })
      .catch((error) =>
        setData((d) => ({ ...d, html: "Error: could not load article" }))
      );
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
