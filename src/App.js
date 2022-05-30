import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail'
import Watch from './components/Watch';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="//detail/:id/watch" element={<Watch />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
