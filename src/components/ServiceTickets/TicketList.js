import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./Tickets.css"

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
                    (ticket) => {
                        return
                        <div key={`ticket--${ticket.id}`} className={ticket.emergency ? "emergency" : "ticket"}>
                            <p>{ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                        </div>
                    }
                    )
                }
            </div>
        </>
    )
}