import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import TaskRenamer from "../Inputs/TaskRenamer";

const Task = ({ task }) => {
    const { id, text, date, isChecked } = task;
    const [checked, setChecked] = useState(isChecked);
    const { taskList } = useOutletContext();

    const [seeMore, setSeemore] = useState(false);
    const [rename, setRename] = useState(false);

    const classNames =
        "bg-[#917FB3] px-4 py-3 border-l-8 border-[#E5BEEC] \
        rounded-xl hover:bg-[#8c75b6] duration-200 flex justify-between mr-2";

    const checkboxHandler = () => {
        setChecked((prev) => {
            const newChecked = !prev;
            const foundObj = taskList.find((obj) => obj.id === id);
            foundObj.isChecked = newChecked;
            localStorage.setItem("taskList", JSON.stringify(taskList));

            return newChecked;
        });
    };

    return (
        <div className="relative">
            <div className={classNames}>
                <div className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => checkboxHandler()}
                        className="cursor-pointer"
                    />
                    <div>
                        {text?.length > 15 ? text?.slice(0, 10) + "..." : text}
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="cursor-pointer">
                        <SeeMore />
                    </div>
                    <div onClick={() => setRename(!rename)} className="cursor-pointer">
                        <Rename />
                    </div>
                    <div className="cursor-pointer">
                        <Delete />
                    </div>
                </div>
            </div>
            {rename && <TaskRenamer />}
        </div>
    );
};

const SeeMore = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z"
            ></path>
        </svg>
    );
};

const Rename = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
            ></path>
        </svg>
    );
};

const Delete = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            ></path>
        </svg>
    );
};

export default Task;