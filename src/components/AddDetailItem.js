import React, { useState } from "react";
import SubtractIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

export default function AddDetailsItem({
  name,
  img,
  icon,
  onIncrement,
  onDecrement,
  cost,
}) {
  let [count, setCount] = useState(0);
  let total = cost * count;
  return (
    <section className="p-2 flex flex-col m-1 shadow bg-white dark:bg-gray-800 rounded">
      <div className="flex items-center justify-between">
        {img ? (
          <div className="h-6 w-6 rounded">
            <img alt={`${name}`} src={img} />
          </div>
        ) : (
          <i className={`text-gray-400 fas ${icon}`} />
        )}
        <p className="text-sm font-light dark:text-gray-200">{name}</p>
        <div className="flex justify-center items-center">
          <IconButton
            disabled={count === 0}
            onClick={(e) => {
              if (count !== 0) {
                let dec = count - 1;
                setCount(dec);
                onDecrement?.call(this, dec, total);
              } else if (count === 0) onDecrement?.call(this, count, total);
            }}
            color="secondary"
            size="small"
          >
            <SubtractIcon />
          </IconButton>
          <p className="text-xs font-thin dark:text-gray-200">{count}</p>
          <IconButton
            onClick={(e) => {
              let inc = count + 1;
              setCount(inc);
              onIncrement?.call(this, inc, total);
            }}
            color="secondary"
            size="small"
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-xs text-gray-400 dark:text-gray-200">
          price: <span className="text-green-600">{cost}</span>
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-200">
          total: <span className="text-green-600">{total}</span>
        </p>
      </div>
    </section>
  );
}
