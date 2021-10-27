import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Signup } from "./MyComponents/Signup";
import { Login } from "./MyComponents/Login";
import Navbar from "./MyComponents/Navbar";
import { Home } from "./MyComponents/Home";
export const App = () => {
  const history = useHistory();
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
