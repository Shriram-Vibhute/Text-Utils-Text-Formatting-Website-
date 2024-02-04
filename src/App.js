import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // ./ represents current directry
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
// import { type } from '@testing-library/user-event/dist/type';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Components/About';

document.body.style.backgroundColor = "#f8f9fa";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    return setAlert({
      message: message,
      type: type
    })
  }
  let changeMode = () => {
    let newMode = (mode === 'light' ? "dark" : 'light');
    setMode(newMode);
    if (mode === 'light') {
      showAlert("Dark mode has been Enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      document.body.style.backgroundColor = "#212529";
    }
    else {
      showAlert("Light mode has been Enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      document.body.style.backgroundColor = "#f8f9fa";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils" />
        <Alert sendAlert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextArea Placeholder="Enter your text here ..." mode={mode} changeMode={changeMode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App; // importing to  index.js