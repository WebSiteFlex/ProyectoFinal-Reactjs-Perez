// NotificationContext.js
import React, { useState, useContext, createContext, useEffect } from "react"
import Swal from "sweetalert2"

const NotificationContext = createContext({
  showNotification: () => { },
})

export const NotificationProvider = ({ children }) => {
  const [notificationText, setNotificationText] = useState("");

  const showNotification = (text) => {
    setNotificationText(text)
  }

  useEffect(() => {
    if (notificationText) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      })
      Toast.fire({
        icon: "success",
        title: notificationText,
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
