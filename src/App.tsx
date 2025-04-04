import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Calculator from './components/Calculator/Calculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;