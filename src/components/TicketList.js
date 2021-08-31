import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [openServiceTickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((openServiceTicketsArray) => {
                    setTickets(openServiceTicketsArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const openServiceTickets = serviceTickets.map(ticket) => {
                setSpecialty(openServiceTickets.join(", "))
    
            }
        }, [serviceTickets])


    return (
        <>
            <div>
                Specialties: {employeeSpecialty}
            </div>

            {
                employees.map(
                    (employeeObj) => {
                        return <p key={`employee--${employeeObj.id}`}>{employeeObj.name}</p>
                    }
                )
            }
        </>
    )
}