
import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Address:
                <textarea
                    name="address"
                    id="address"
                    value={userData.address}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Cp:
                <input
                    type="tel"
                    name="cp"
                    id="cp"
                    value={userData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Locality:
                <input
                    type="text"
                    name="locality"
                    id="locality"
                    value={userData.locality}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default OrderForm;
