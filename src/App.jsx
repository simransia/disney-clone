import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/movieDetails";
import WatchMovie from "./views/watchMovie";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="//detail/:id/watch" element={<WatchMovie />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
