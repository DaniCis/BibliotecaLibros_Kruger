import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Create from './pages/Create';
import View from './pages/View';
import Store from "./store/Store";

function App() {
  return (
    <Store>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:bookId' element={<View />} />
        </Routes>
      </Router>
    </Store>
  );
}

export default App;
