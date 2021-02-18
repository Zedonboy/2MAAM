import React from "react";

export default function OrderItem({ txn_id, itemCount, status, total }) {
  return (
    <section className="bg-white dark:bg-gray-800 m-1 flex flex-col rounded p-2 shadow">
      <p className="text-gray-800 dark:text-gray-200 font-bold text-base">#{txn_id}</p>
      <hr />
      <div className="flex p-1 justify-between">
        <p className="text-xs dark:text-gray-200 text-gray-400">Items Count:</p>
        <p className="text-xs text-green-400">{itemCount}</p>
      </div>
      <div className="flex p-1 justify-between">
        <p className="text-xs dark:text-gray-200 text-gray-400">Status:</p>
        {status === "pending" ? (
          <p className="text-xs border rounded p-0.5 border-gray-400 text-gray-400">
            {status}
          </p>
        ) : (
          <p className="text-xs border rounded p-0.5 border-green-400 text-green-400">
            {status}
          </p>
        )}
      </div>
      <hr />
      <div className="flex p-1 justify-between">
        <p className="text-xs dark:text-gray-200 text-gray-400">Total:</p>
        <p className="text-base text-red-400">{total}</p>
      </div>
    </section>
  );
}
