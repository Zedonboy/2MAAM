import { Badge, IconButton } from "@material-ui/core";
import React from "react";

export default function BottomNav({ children, className }) {
  return (
    <section className={`flex justify-around ${className || ""}`}>
      {children}
    </section>
  );
}

export function Item({ icon, count = 0, label, className, active, notify, onClick }) {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
        <Badge overlap="circle" badgeContent={notify ? " " : count} color="error" variant={`${notify ? "dot" : "standard"}`}>
          <IconButton
          onClick={e => {
              onClick?.call(this, e)
          }}
            style={{
              color: active ? "#059669" : "gray",
            }}
          >
            {icon}
          </IconButton>
        </Badge>
      <p className="text-xs font-light dark:text-gray-200">{label}</p>
    </div>
  );
}
