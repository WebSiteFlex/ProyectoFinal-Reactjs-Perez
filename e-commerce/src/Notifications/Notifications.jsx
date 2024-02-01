// NotificationContext.js
import React, { useState, useContext, createContext, useEffect } from "react"
import Swal from "sweetalert2"

const NotificationContext = createContext({
  showNotification: () => {},
})

export const NotificationProvider = ({ children }) => {
  const [notificationText, setNotificationText] = useState("");

  const showNotification = (text) => {
    setNotificationText(text)
  }

  useEffect(() => {
    if (notificationText) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: notificationText,
        showConfirmButton: false,
        timer: 1800,
      })
      setNotificationText("");
    }
  }, [notificationText]);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext);
}
