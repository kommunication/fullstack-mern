import React, { useEffect, useState } from 'react'
import { getNotification, getNotifications } from '../api'

export const NotificationList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const notifications = await getNotifications()
            setItems(notifications)
        }

        fetchItems()
    }, [])

    return (
        <div className="container">
            
            <h3>Notifications</h3>
            <div className="container">
                {
                    items.map((notification, index) => (
                        <div key={index} className="mt-3">
                            <div><strong>{notification.subject}</strong></div>
                            <div>{notification.message}</div>
                        </div>
                    ))
                }
            </div>
           
        </div>
    )
}