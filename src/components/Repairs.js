import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Redirect } from "react-router"
import "./Repairs.css"


export const Repairs = () => {
    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("honey_customer")) {
                        return (
                            <>
                                <NavBar />
                                <h1>Honey Rae's Repairs</h1>
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </>
    );
}