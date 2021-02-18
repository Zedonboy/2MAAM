import React from "react";
import PropTypes from 'prop-types'

function ServiceCategoryItem({ iconName, img, serviceName, value, onActivate, active }) {
  return (
    <>
      <section>
        <button
          onClick={(e) => {
            onActivate(value)
          }}
          className={`w-24 h-36 bg-white dark:bg-gray-800 flex border-2 ${
            active ? "border-green-400" : "border-transparent"
          } rounded hover:shadow flex-col justify-center items-center ${
            active ? "text-green-400" : "text-gray-400"
          }`}
        >
            {img ? <img alt={serviceName} className="w-12 h-12" src={img}/> : <i className={`fas ${iconName} fa-2x`}></i>}
         
          <p className="font-light dark:text-gray-200 text-xs bottom-0">{serviceName}</p>
        </button>
      </section>
    </>
  );
}

ServiceCategoryItem.propTypes = {
    iconName : PropTypes.string.isRequired,
    value : PropTypes.any.isRequired,
    onActivate : PropTypes.func.isRequired,
    active : PropTypes.bool.isRequired
}

export default ServiceCategoryItem