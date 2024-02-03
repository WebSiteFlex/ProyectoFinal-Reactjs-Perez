
import React, { useState } from "react";
import classOrderForm from "./OrderForm.module.css"
const OrderForm = ({ onCreate }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        cp: "",
        locality: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(userData)
        setUserData({})
    }

    return (
        <form onSubmit={handleSubmit} className={classOrderForm.form}>
            <label className={classOrderForm.label}>
                Name:
                <input
                    className={classOrderForm.input}
                    type="text"
                    name="name"
                    id="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className={classOrderForm.label}>
                Email:
                <input
                    className={classOrderForm.input}
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className={classOrderForm.label}>
                Address:
                <input
                    className={classOrderForm.input}
                    name="address"
                    id="address"
                    value={userData.address}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={classOrderForm.label}>
                Phone:
                <input
                    className={classOrderForm.input}
                    type="tel"
                    name="phone"
                    id="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={classOrderForm.label}>
                Cp:
                <input
                    className={classOrderForm.input}
                    type="tel"
                    name="cp"
                    id="cp"
                    value={userData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={classOrderForm.label}>
                Locality:
                <input
                    className={classOrderForm.input}
                    type="text"
                    name="locality"
                    id="locality"
                    value={userData.locality}
                    onChange={handleChange}
                    required
                />
            </label>
            <div className={classOrderForm.containerButton}>
                <button className={classOrderForm.buttonOrder} type="submit">Send</button>
            </div>
        </form>
    )
}

export default OrderForm;
