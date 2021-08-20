import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Profile from "./components/Profile";
import Message from "./components/Message";
import UsersMsg from "./components/UsersMsg";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

  useEffect(resetSearch, [location]);

  function resetSearch() {
    setSearchQuery("");
    setSearchInput("");
  }

  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/home">
          <Feed searchQuery={searchQuery} />
        </Route>
        <Route exact path="/message/:id" component={Message} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user/:id/messages" component={UsersMsg} />
        <Route exact path="/me">
          <Profile />
        </Route>
        <Redirect to="/home" />
      </Switch>

      <Widgets
        setSearchQuery={setSearchQuery}
        input={searchInput}
        setInput={setSearchInput}
        reset={resetSearch}
      />
    </div>
  );
}

export default App;
