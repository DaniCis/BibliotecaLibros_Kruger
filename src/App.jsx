import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Create from './pages/Create';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:bookId' element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
