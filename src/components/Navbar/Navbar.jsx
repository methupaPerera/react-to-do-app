import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setTaskList, taskList }) => {
    return (
        <div className="flex justify-between items-center mt-3 mb-4 text-lg ml-1">
            <div className="flex gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                >
                    All
                </NavLink>
                <NavLink
                    to="pending"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                >
                    Pending
                </NavLink>
                <NavLink
                    to="completed"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                >
                    Completed
                </NavLink>
            </div>
            <button
                onClick={() => {
                    if (taskList.length === 0) {
                        alert("Nothing to clear!");
                        return;
                    }
                    setTaskList([]);
                    localStorage.clear();
                }}
                className="text-center bg-[#917FB3] hover:bg-[#8770b2] duration-300 \
        text-[#2A2F4F] py-2 px-4 font-bold rounded-xl"
            >
                Clear
            </button>
        </div>
    );
};

export default Navbar;
