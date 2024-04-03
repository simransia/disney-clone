import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/movieDetails";
import WatchMovie from "./views/watchMovie";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="//detail/:id/watch" element={<WatchMovie />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
