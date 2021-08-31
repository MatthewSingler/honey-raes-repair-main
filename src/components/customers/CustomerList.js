import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomers, setCustomersMessage] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    useEffect(
        () => {
            setCustomersMessage (`You have ${customers.length} customers`)
        },
        [customers]
    )

    return (
        <>
            <div>
                {totalCustomers}
            </div>
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}