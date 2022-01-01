
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Alert from "./Alert";
import Navbar from "./Navbar";

import UserDetails from "./UserDetails";

import GithubState from '../context/githubState'
import AlertState from "../Alert/alertState";
import { NotFound } from "./NotFound";
import Home from "./Home";


const App =()=> {
    return ( 
    <GithubState>
      <AlertState>
      <BrowserRouter>
        <Navbar title="Github Finder" icon="fab fa-github ms-3" />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/user/:login" component={UserDetails}  />
        <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
      </AlertState>
      </GithubState>
    );
    
  }


export default App;
