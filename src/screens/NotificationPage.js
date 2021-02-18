import React from 'react'
import { IconButton } from "@material-ui/core";
import LeftIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import NotificationItem from '../components/Notification';

let notifications = [{
    type : "error",
    message: "Your Transcation failed"
},
{
    type : "info",
    message: "Your Transcation failed"
},
{
    type : "success",
    message: "Your Transcation failed"
},
{
    type : "warning",
    message: "Your Transcation failed"
},]
export default function NotificationPage() {
    let history = useHistory()
    // TODO useEfect do read logic API
    return (
        <>
      <header className="flex fixed right-0 top-0 left-0 items-center h-12 bg-purple-800 dark:bg-gray-800">
        <div>
          <IconButton onClick={e => {
              history.goBack()
          }}>
            <LeftIcon />
          </IconButton>
        </div>
        <p className="ml-4 text-white font-light text-xl">Notification</p>
      </header>
      <section className="p-0 mt-12 flex flex-col overflow-y-auto">
        {notifications.map(n => (
            <NotificationItem type={n.type} message={n.message}/>
        ))}
      </section>
    </>
    )
}