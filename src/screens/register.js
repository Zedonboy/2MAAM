import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "../components/Layout";
import { appName } from "../appConfig";

function Copyright() {
  return (
    <p className="dark:text-gray-200 text-center text-gray-800">
      {"Copyright © "}
      <Link color="inherit" href="/terms">
        {appName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="dark:text-gray-200" component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="text-gray-800 border-2 border-green-400 dark:text-gray-200 w-full p-2 rounded bg-purple-800 dark:bg-gray-800"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="text-gray-800 border-2 border-green-400 dark:text-gray-200 w-full p-2 rounded bg-purple-800 dark:bg-gray-800"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="text-gray-800 border-2 border-green-400 dark:text-gray-200 w-full p-2 rounded bg-purple-800 dark:bg-gray-800"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  name="pass"
                  type="password"
                  placeholder="Password"
                  className="text-gray-800 border-2 border-green-400 dark:text-gray-200 w-full p-2 rounded bg-purple-800 dark:bg-gray-800"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
