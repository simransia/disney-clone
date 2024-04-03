import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/movieDetails";
import Watch from "./views/watch";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="//detail/:id/watch" element={<Watch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
