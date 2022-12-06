import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Create from './pages/Create';
import View from './pages/View';
import Store from "./store/Store";
import Edit from "./pages/Edit";

function App() {
  return (
    <Store>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:bookId' element={<View />} />
          <Route path='edit/:bookId' element={<Edit />} />
        </Routes>
      </Router>
    </Store>
  );
}

export default App;
