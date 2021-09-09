import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const TicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([])
    const [openServiceTickets, setTickets] = useState([])
    const history = useHistory()

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
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            <div>
                Service Tickets: {`There are currently ${serviceTickets.length} open tickets`}

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