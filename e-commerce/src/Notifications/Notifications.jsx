import {useState,useContext,createContext} from "react"
// import Swal from "sweetalert2"
const NotificationContext = createContext({
    showNotification: () => {}
})

const Notification = ({data}) =>{
    const color = {
        success:"black",
        error:"red",
        warning:"orange",
        info:"blue"
    }

    const notificationStyles = {
        position:"absolute",
        top:100,
        right:30,
        backgroundColor:"white",
        padding:20,
        borderRadius:15
    }

    return(
        <div style={notificationStyles}>
            <h4>{data.type}</h4>
            <p>{data.text}</p>
        </div>
    )
}

export const NotificationProvider = ({children}) =>{
    const [data, setData] = useState({
        type:"success",
        text:""
    })
    const showNotification = (type,text) =>{
        setData({text,type})
        setTimeout(()=>{
            setData({type,text:""})
        },1200)
    }

    return(
        <NotificationContext.Provider>
            {data.text && <Notification  notificationData={data}></Notification>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () =>{
    return useContext(NotificationContext)
}
