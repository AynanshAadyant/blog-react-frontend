import React from "react";
import authService from "../../appwrite/auth";
import {logout} from "../../store/authSlice"
import { useDispatch } from "react-redux";

export default function LogOut()
{
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(
            dispatch(logout)
        )
    }

    return (
    <div className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" 
    onClick = {logoutHandler}> Logout </div>
    )
}