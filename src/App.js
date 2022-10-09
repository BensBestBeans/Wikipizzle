import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Pizzle from "./pages/Pizzle";

export default function App() {
  const ops = ["p", "fr", "d", "w"];
  const l = ops[Math.floor(Math.random() * ops.length)];
  const [state, setState] = React.useState({
    pizz: l,
    tutePage: 0,
    page: 0,
    popup: false,
    mode: "GES",
    searchValue: "",
    explorePage: "",
  });

  const [data, setData] = React.useState({
    html: "loading...",
    title: "",
    contentType: false,
  });

  console.log("render");
  React.useEffect(() => {
    fetch("http://localhost:3001/art")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData({
          html: data.html,
          title: data.title,
          contentType: data.type === "w",
        });
      });
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
        {/* <Route path="/explore" element={<Explore />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
