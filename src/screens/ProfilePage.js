import React from "react";
import { IconButton } from "@material-ui/core";
import LeftIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import logo from "../logo.svg";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";

let orders = [
  {
    txn_id: 23,
    itemCount: 4,
    status: "pending",
    total: 4500,
  },
  {
    txn_id: "dkng53bfdv",
    itemCount: 4,
    status: "processed",
    total: 4500,
  },
  {
    txn_id: 23,
    itemCount: 4,
    status: "pending",
    total: 4500,
  },
];
export default function ProfilePage() {
  let history = useHistory();
  let user = useSelector((state) => state.user.value);
  if(!user){
    history.push("/login?redirect_to=profile")
    return null
  }
  return (
    <>
      <header className="flex fixed right-0 top-0 left-0 items-center h-12 bg-purple-800 dark:bg-gray-800">
        <div>
          <IconButton
            style={{
              color: "white",
            }}
            onClick={(e) => {
              history.goBack();
            }}
          >
            <LeftIcon />
          </IconButton>
        </div>
        <p className="ml-4 text-white font-light text-xl">Profile</p>
      </header>
      <section className="p-2 mt-12 flex justify-center flex-col">
        <div className="flex justify-center">
          <img alt="" className="w-24 h-24" src={logo} />
        </div>
        <p className="text-center dark:text-gray-200">
          {user?.full_name || "User"}
        </p>
        {orders.map((o) => (
          <OrderItem
            txn_id={o.txn_id}
            total={o.total}
            status={o.status}
            itemCount={o.itemCount}
          />
        ))}
      </section>
    </>
  );
}
