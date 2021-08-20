import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Sidebar />
      <Feed searchQuery={searchQuery} />
      <Widgets setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;
