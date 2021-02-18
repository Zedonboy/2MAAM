import React from "react";
import { Button, IconButton } from "@material-ui/core";
import LeftIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
const cartx = [
  {
    name: "Wardrobe",
    cost: 200,
    qty: 3,
  },
  {
    name: "Wardrobe",
    cost: 200,
    qty: 3,
  },
  {
    name: "Wardrobe",
    cost: 200,
    qty: 3,
  },
];
export default function CartPage() {
  let history = useHistory();
  let carts = useSelector(state => state.cart.value)
  return (
    <main className="h-5/6">
      <header className="flex fixed right-0 top-0 left-0 items-center h-12 bg-purple-800 dark:bg-gray-800">
        <div>
          <IconButton
          style={{
            color : "white"
          }}
            onClick={(e) => {
              history.goBack();
            }}
          >
            <LeftIcon />
          </IconButton>
        </div>
        <p className="ml-4 text-white font-light text-xl">Notification</p>
      </header>
      <section className="p-2 mt-12 justify-center flex flex-col">
        <div className="overflow-y-auto">
          {carts.length === 0 ? (<p className="dark:text-gray-200">No Item in Cart</p>) : null}
          {carts.map((c) => (
            <CartItem name={c.name} cost={c.cost} qty={c.qty} />
          ))}
        </div>
        <div className="fixed right-2 left-2 bottom-16">
          <Button disabled={carts.length === 0} onClick={e => {
            history.push("/orderConfirmed")
          }} variant="contained" className="mb-1 w-full" color="secondary">
            Pay
          </Button>
        </div>
      </section>
    </main>
  );
}
