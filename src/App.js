import "./App.css";
import LoginComponent from "./LoginComponent";
import ListCenters from "./Components/ListCenters";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import AddCenter from "./Components/AddCenter";
import MainPage from "./Components/MainPage";
import NotFound from "./Components/NotFound";
import UpdateCenter from "./Components/UpdateCenter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addCenter" component={AddCenter}></Route>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/centerlist" component={ListCenters}></Route>
        <Route path="/mainpage" component={MainPage}></Route>
        <Route
          exact
          path="/updatecenter/:centerId"
          component={UpdateCenter}
        ></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
