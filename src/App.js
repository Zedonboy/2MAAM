import React, { useEffect } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NoNetwork from "./screens/no-network";
import SignIn from "./screens/login";
import SignUp from "./screens/register";
import Home from "./screens/Home";
import {get} from "idb-keyval";
import { useDispatch } from "react-redux";
import { fetchServiceCat } from "./store/slices/serviceList.slice";
import { updateDarkMode } from "./store/slices/app.slice";
import { fetchUser } from "./store/slices/user.slice";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#059669",
      dark: "#059669",
    },
  },
})
function App() {
  let dispatch = useDispatch()
  useEffect(() => {
    // seed the store values
    get("darkMode").then(data => dispatch(updateDarkMode(data ?? false)))
    dispatch(fetchServiceCat(null))
    dispatch(fetchUser(null))
  })

  return (
    <ThemeProvider theme={theme}>   
      <Router>
        <Switch>
          <Route path="/no_network">
            <NoNetwork />
          </Route>

          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
