import React from "react";

export default function CartItem({ name, cost, qty }) {
  return (
    <section className="bg-white dark:bg-gray-800 m-1 flex flex-col rounded p-2 shadow">
      <p className="text-gray-800 dark:text-gray-200 font-bold text-base">{name}</p>
      <hr className="dark:text-gray-200"/>
      <div className="flex p-1 justify-between">
        <p className="text-xs dark:text-gray-200 text-gray-400">Unit cost:</p>
        <p className="text-sm text-green-400">N{cost}</p>
      </div>
      <div className="flex p-1 justify-between">
        <p className="text-xs dark:text-gray-200 text-gray-400">Qty:</p>
        <p className="text-sm text-green-400">{qty}</p>
      </div>
      <hr />
      <div className="flex p-1 justify-between">
        <p className="text-xs dark:text-gray-200 text-gray-400">Subtotal:</p>
        <p className="text-base text-red-400">N{qty * cost}</p>
      </div>
    </section>
  );
}
