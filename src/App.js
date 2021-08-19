import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
