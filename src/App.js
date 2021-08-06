import React from "react";
import { Switch,Route } from "react-router-dom";
import Login from "./components/account/Login";
import Profile from "./components/account/Profile";
import Register from "./components/account/Register";
import Header from './components/Header/Header'
import NewsList from './components/home/NewsList'
import ReadLater from './components/Readlater/ReadLater'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={NewsList} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/readlater" component={ReadLater}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
