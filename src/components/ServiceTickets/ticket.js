import React, { useState useEffect} from "react"
import { useParams } from "react-router"



export const ticket = () => {
    const { ticketId } = useParams()
    return (
        <>
            <h2>Ticket Details</h2>
        </>
    )
}