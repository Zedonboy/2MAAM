import { Alert } from '@material-ui/lab'
import React from 'react'

export default function NotificationItem({type, message}){
    return <Alert className="m-1" variant="outlined" severity={type}>
        <div className="text-xs text-gray-700 dark:text-gray-200">{message}</div></Alert>
}