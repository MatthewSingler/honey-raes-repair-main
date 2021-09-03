import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([])
    const [openServiceTickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/servicetickets?_expand=customer&_expand=employee")
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
                setTickets(allServiceTickets.join(" , "))
        }, [serviceTickets])


    return (
        <>
            <div>
                Service Tickets: {openServiceTickets}

            {
                serviceTickets.map(
                    (ticketObject) => {
                        return <p key={`ticket--${ticketObject.id}`}>{ticketObject.description} SUBMITTED BY {ticketObject.customer.name}. BEING WORKED ON BY {ticketObject.employee.name}</p>
                    }
                    )
                }
            </div>
        </>
    )
}