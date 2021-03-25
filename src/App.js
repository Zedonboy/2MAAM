import React, { useEffect } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NoNetwork from "./screens/no-network";
import SignIn from "./screens/login";
import SignUp from "./screens/register";
import Home from "./screens/Home";
import { get } from "idb-keyval";
import { useDispatch, useSelector } from "react-redux";
import { updateDarkMode } from "./store/slices/app.slice";
import { fetchUser } from "./store/slices/user.slice";
import { Helmet } from "react-helmet";
//import { updateJwt } from "./store/slices/jwt.slice";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#059669",
      dark: "#059669",
    },
  },
});

function App() {
  let dispatch = useDispatch();
  let darkMode = useSelector((state) => state.appConfig.darkMode);
  useEffect(() => {
    // seed the store values
    get("darkMode").then((data) => dispatch(updateDarkMode(data ?? false)));
    dispatch(fetchUser())
    // get("jwt").then(jwt => {
    //   if(jwt) {
    //     get("user").then(user => {
    //       if(user) dispatch(UpdateUser(user))
    //       else dispatch(fetchUser(jwt));
    //     })
    //     dispatch(updateJwt(jwt))
    //   }
    // })
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="description" content="Todos!" />
        {darkMode ? (
          <meta name="theme-color" content="#1F2937" />
        ) : (
          <meta name="theme-color" content="#5B21B6" />
        )}
      </Helmet>
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
