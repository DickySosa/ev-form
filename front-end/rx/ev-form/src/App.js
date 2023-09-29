import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import FormManagement from './pages/FormManagement';
import Find from './pages/Find';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/form-management" element={<FormManagement/>} />
          <Route path="/find" element={<Find/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
