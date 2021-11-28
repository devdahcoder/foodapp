import { React } from "react";
import './App.css';

//imported packages
import {Switch, Route} from "react-router-dom";

//imported components
import SideBar from "./Components/SideBar/SideBar";
import ConfirmationPayment from "./Components/ConfirmationPayment/ConfirmationPayment";

//imported pagess
import Home from "./Pages/Home/Home";
import Chart from "./Pages/Chart/Chart";
import DashBoard from "./Pages/DashBoard/DashBoard";


function App() {
  return (
    <>
      <div className="App">
        <SideBar />

        <main className="food-app-main">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/chart" component={Chart} exact />
            {/* <Route path="/chart" component={DashBoard} exact /> */}
          </Switch>
        </main>
        
      </div>
      {/* <ConfirmationPayment /> */}
    </>
  );
}

export default App;
