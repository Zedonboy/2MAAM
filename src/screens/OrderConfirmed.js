import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export default function OrderConfirmedPage() {
  let history = useHistory()
  return (
    <section className="flex flex-col items-center justify-center p-2 h-full">
      <i className="far text-green-400 p-1 fa-check-circle fa-5x"></i>
      <p className="text-green-400 text-xl font-light">Your order is sent</p>
      <p className="text-xs text-green-400 font-light">
        Our agents will contact you shortly
      </p>
      <Button variant="text" onClick={e => {
        history.push("/")
      }} color="primary">
        <Typography>Go to home</Typography>
      </Button>
    </section>
  );
}
