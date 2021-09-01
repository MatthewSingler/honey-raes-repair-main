import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./EmployeeList"
import { TicketList } from "./TicketList"
export const Repairs = () => {
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
            <CustomerList />
            <EmployeeList />
            <TicketList />
            </>
    )
}