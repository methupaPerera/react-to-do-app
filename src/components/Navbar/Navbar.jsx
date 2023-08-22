import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setTaskList, taskList, setIndex }) => {
    return (
        <div className="flex sm:justify-between justify-center flex-col gap-2 sm:flex-row items-center mt-3 mb-2 sm:mb-4 text-lg ml-1">
            <div className="flex gap-4 justify-center">
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
                    setIndex(0);
                    localStorage.clear();
                }}
                className="text-center bg-[#917FB3] hover:bg-[#8770b2] duration-300 \
        text-[#2A2F4F] py-1 px-3 font-bold rounded-xl"
            >
                <Link to="/">Clear</Link>
            </button>
        </div>
    );
};

export default Navbar;
