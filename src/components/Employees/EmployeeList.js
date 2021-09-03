import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [employeeSpecialty, setSpecialty] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )
        
    useEffect(
        () => {
        const eachEmployeeSpeciality = employees.map(employee => employee.specialty)
        setSpecialty(eachEmployeeSpeciality.join(", "))
    }, [employees])

    

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
            <button onClick={() => history.push("/employees/create")} className="btn btn-primary">
                Hire Employee
            </button>
        </>
    )
}