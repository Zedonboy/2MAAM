import React from "react";

export default function ServiceTypeItem({ icon, img, name, onClick }) {
  return (
    <button onClick={onClick} className="p-2 m-1 flex justify-between shadow dark:bg-gray-800 bg-white rounded">
      {img ? (
        <div className="h-6 w-6 rounded">
          <img alt={`${name}`} src={img} />
        </div>
      ) : (
        <i className={`text-gray-400 dark:text-gray-200 fas ${icon}`} />
      )}
      <p className="text-sm dark:text-gray-200 font-light">{name}</p>
      <div>
        <i class="text-green-600 fas fa-chevron-right"></i>
      </div>
    </button>
  );
}
