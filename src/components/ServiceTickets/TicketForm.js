import React, { useState } from "react"
import { useHistory } from "react-router";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    });

    const history = useHistory()
    
    const submitTicket = (event) => {
        event.preventDefault()

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/serviceTickets")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={
                            (event) => {
                                const copyOfTicket = { ...ticket }
                                copyOfTicket.description = event.target.value
                                updateTicket(copyOfTicket)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                       />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copyOfTicket = { ...ticket }
                                copyOfTicket.emergency = event.target.checked
                                updateTicket(copyOfTicket)
                            }
                         } />
                </div>
            </fieldset>
            <button onClick={submitTicket} className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}
