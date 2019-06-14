import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './Component/Home/Home.js';
import Main from "./Component/Main/Main.js";
import Navigation from "./Component/Navigation/Navigation.js";
import Form1 from "./Component/Form/Form1";
import Form2 from "./Component/Form/Form2";
import Comments from "./Component/Comment/Comments.js";
import Jobs from './Component/Jobs/Jobs.js';
import Artisan from "./Component/Artisan/Artisan.js";
import JobPage from "./Component/Jobs/JobPage.js";
import CommentData from "./Component/Comment/CommentData.js";
const pingUrl = `${process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:8080'}/ping`;

function App() {

  return (
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
          )}>
          </Route>
        <Route exact path="/form1" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Redirect exact to="/home" from="/" />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
