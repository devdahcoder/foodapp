import { React } from "react";
import './App.css';

//imported packages
import {Switch, Route} from "react-router-dom";

//imported components
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <SideBar />

      <main className="food-app-main">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
    </div>
  );
}

export default App;
