import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './component/Home.js'
import Main from "./component/Main/Main.js";
import Navigation from "./component/Navigation/Navigation.js";
import Form1 from "./component/Form/Form1";
import Form2 from "./component/Form/Form2";
import Comments from "./component/Comment/Comments.js";
import Jobs from './component/Jobs/Jobs.js';
import "./App.css";
import Artisan from "./component/Artisan/Artisan.js";
import JobPage from "./component/Jobs/JobPage.js";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/comments" component={Comments} />
        <Jobs exact path="/jobs" component={JobPage}/>
        <Main exact path="/artisan" component={Artisan}/>
        <Route exact path="/form1" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        
       
        {/* <Redirect exact to="/artisan" from="/" /> */}
        {/* <Form /> */}
        <Form1 exact path="/form1" />
        {/*<Form2 exact path="/form2" />*/}
        {/* <Comments exact path="/comments"/> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
