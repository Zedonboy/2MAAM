import { IconButton } from "@material-ui/core";
import React from "react";
import AddDetailsItem from "../components/AddDetailItem";
import LeftIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem, updateCartItem } from "../store/slices/cart.slice";
const serviceCat = [
  {
    name: "Laundry",
    icon: "fa-tshirt",
    cost: 200,
  },

  {
    name: "Cooking",
    icon: "fa-utensils",
    cost: 300,
  },

  {
    name: "Home Cleaning",
    icon: "fa-broom",
    cost: 400,
  },
];

export default function AddDetails() {
  let history = useHistory();
  let dispatch = useDispatch();
  let items = useSelector((state) => state.serviceSubCategory.currentService);
  let carts = useSelector(state => state.cart.value)
  return (
    <>
      <header className="flex fixed right-0 top-0 left-0 items-center h-12 bg-purple-800 dark:bg-gray-800">
        <div>
          <IconButton
            onClick={(e) => {
              history.goBack();
            }}
          >
            <LeftIcon />
          </IconButton>
        </div>
        <p className="ml-4 text-white font-light text-xl">Add Details</p>
      </header>
      <section className="p-0 mt-16 flex flex-col overflow-y-auto">
        {items?.map((v) => (
          <AddDetailsItem
            name={v.name}
            onIncrement={(count) => {
              if (count > 0) {
                // checking whether does this cart item exists?
                let index = carts.findIndex((h) => h.id === v.id);
                if (index === -1) {
                  // does not exist. create a cartItem
                  dispatch(addCartItem({...v, qty: count}))
                } else {
                  // exists update it then
                  let item = {...carts[index], qty : count}
                  dispatch(updateCartItem({ index, item }));
                }
              }
            }}
            onDecrement={count => {
              if (count > 0) {
                // checking whether does this cart item exists?
                let index = carts.findIndex((h) => h.id === v.id);
                if (index === -1) {
                  // does not exist. create a cartItem
                  dispatch(addCartItem({...v, qty: count}))
                } else {
                  // exists update it then
                  let item = {...carts[index], qty : count}
                  dispatch(updateCartItem({ index, item }));
                }
              } else if(count <= 0) {
                let index = carts.findIndex((h) => h.id === v.id);
                console.log(index)
                if(index > -1) dispatch(removeCartItem(index))
              }
            }}
            icon={v.icon}
            cost={v.cost}
          />
        ))}
      </section>
    </>
  );
}
