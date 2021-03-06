import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [newEmployee, setNewEmployee] = useState([])

    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()
        
        const hiredEmployee = {
            id: newEmployee.id,
            name: newEmployee.name,
            specialty: newEmployee.specialty
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(hiredEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="employee name"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.name = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">specialty</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="employee specialty"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.specialty = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Submit Employee
            </button>
        </form>
    )
}