import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Layout>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className="dark:text-gray-200" component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="w-full md:w-1/3" noValidate>
          <label className="text-gray-800 dark:text-gray-200">Email</label>
          <input name="email" type="email" placeholder="Email" className="text-gray-800 border-2 border-green-400 dark:text-gray-200 w-full p-2 rounded bg-purple-800 dark:bg-gray-800"/>
          <label className="text-gray-800 ">Password</label>
          <input name="pass" type="password" placeholder="Password" className="text-gray-800 border-2 border-green-400 dark:text-gray-200 w-full p-2 rounded bg-purple-800 dark:bg-gray-800"/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<p className="dark:text-gray-200 text-gray-800">Remember Me</p>}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Layout>
  );
}
