import React, { useState } from "react";
import { Checkbox, FormControlLabel, IconButton } from "@material-ui/core";
import LeftIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDarkMode } from "../store/slices/app.slice";
import {set, get} from "idb-keyval"
export default function SettingsPage() {
  let [darkMode, setDarkMode] = useState(false)
  get("darkMode").then(data => setDarkMode(data ?? false))
  let history = useHistory();
  let dispatch = useDispatch()

  return (
      <>
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
      <p className="ml-4 text-white font-light text-xl">Settings</p>
    </header>
    <section className="p-2 mt-12 flex justify-center flex-col">
    <section className="bg-white dark:bg-gray-800 m-1 flex flex-col rounded p-2 shadow">
      <p className="text-gray-800 dark:text-gray-200 font-bold text-base">Theme</p>
      <hr className="dark:text-gray-200"/>
      <FormControlLabel control={<Checkbox checked={darkMode} color="secondary" onChange={e => {
        dispatch(updateDarkMode(e.target.checked))
        set("darkMode", e.target.checked)
        setDarkMode(e.target.checked)
      }}/>} label={<p className="dark:text-gray-200">Dark Mode</p>}/>
    </section>
    </section>
    </>
  );
}
