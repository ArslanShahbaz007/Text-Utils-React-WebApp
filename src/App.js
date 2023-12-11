import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setMode] = useState("light");
  const showAlert = (message) => {
    setalert({
      msg: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        AboutText="About"
        mode={mode}
        togglemode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container my-5">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
        <Textarea mode={mode} showAlert={showAlert} />
          </Route>
        </Switch> 
      </div>
      </Router> 
    </>
  );
}

export default App;
