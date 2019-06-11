import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './component/Home.js'
import Main from "./component/Main/Main.js";
import Navigation from "./component/Navigation/Navigation.js";
import Form1 from "./component/Form/Form1";
import Form2 from "./component/Form/Form2";
import FormHandler from './component/FormHandler/FormHandler';
import Comments from "./component/Comment/Comments.js";
import Jobs from './component/Jobs/Jobs.js';
import "./App.css";
import Artisan from "./component/Artisan/Artisan.js";
import JobPage from "./component/Jobs/JobPage.js";
import CommentData from "./component/Comment/CommentData.js";
// import CommentDisplay from "./component/Comment/CommentDisplay.js";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Jobs exact path="/jobs" component={JobPage}/>
        <Route exact path="/artisan" 
          render={(props) => (
            <Main {...props}><Artisan /></Main>
          )}>
          </Route>
        <Route exact path="/comments" 
          render={(props) => (
            <CommentData {...props}><Comments /></CommentData>
          )}
        ></Route>
        <Route exact path="/form1" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Redirect exact to="/home" from="/" />
        <FormHandler exact path="/formhandler" />
        <Form1 exact path="/form1" />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
