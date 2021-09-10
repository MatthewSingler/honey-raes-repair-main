import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { TicketList } from "./ServiceTickets/TicketList"
import { TicketForm } from "./ServiceTickets/TicketForm"
import { EmployeeForm } from "./Employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route path="/tickets">
                <TicketList />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <TicketForm />
            </Route>
        </>
    )
}
