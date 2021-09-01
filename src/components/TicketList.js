import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([])
    const [openServiceTickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((serviceTicketsArray) => {
                    setServiceTickets(serviceTicketsArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const allServiceTickets = serviceTickets.map(ticket => ticket.id)
                setTickets(allServiceTickets.join(", "))
        }, [serviceTickets])


    return (
        <>
            <div>
                Service Tickets: {openServiceTickets}
            </div>

            {
                serviceTickets.map(
                    (ticketObject) => {
                        return <p key={`ticket--${ticketObject.id}`}>{ticketObject.customerId} needs service for {ticketObject.description} and is being helped by {ticketObject.employeeId}</p>
                    }
                )
            }
        </>
    )
}