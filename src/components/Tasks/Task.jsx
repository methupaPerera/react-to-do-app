import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import TaskRenamer from "../Inputs/TaskRenamer";

const Task = ({ task }) => {
    const { id, text, isChecked } = task;
    const { taskList, setTaskList } = useOutletContext();

    // State values
    const [checked, setChecked] = useState(isChecked);
    const [rename, setRename] = useState(false);
    const [renameValue, setRenameValue] = useState("");

    const classNames =
        "bg-[#917FB3] px-4 h-12 border-l-8 border-[#E5BEEC] \
        rounded-xl hover:bg-[#8c75b6] duration-200 flex justify-between";

    const checkboxHandler = () => {
        setChecked((prev) => {
            const newChecked = !prev;
            const foundObj = taskList.find((obj) => obj.id === id);
            foundObj.isChecked = newChecked;
            localStorage.setItem("taskList", JSON.stringify(taskList));

            return newChecked;
        });
    };

    const renameHandler = () => {
        const foundObj = taskList.find((obj) => obj.id === id);
        foundObj.text = renameValue;
        localStorage.setItem("taskList", JSON.stringify(taskList));
    };

    const deleteHandler = () => {
        const filteredTaskList = taskList.filter((obj) => obj.id !== id);
        setTaskList(filteredTaskList);
        localStorage.setItem("taskList", JSON.stringify(filteredTaskList));
    };

    return (
        <div className="relative mr-2">
            <div className={classNames}>
                <div className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => checkboxHandler()}
                        className="cursor-pointer now"
                    />
                    <div>
                        {text?.length > 14 ? text?.slice(0, 14) + "..." : text}
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="cursor-pointer">
                        <Link to={`/${id}`}>
                            <SeeMore />
                        </Link>
                    </div>
                    <div
                        onClick={() => setRename(!rename)}
                        className="cursor-pointer"
                    >
                        <Rename />
                    </div>
                    <div
                        onClick={() => deleteHandler()}
                        className="cursor-pointer"
                    >
                        <Delete />
                    </div>
                </div>
            </div>
            {rename && (
                <TaskRenamer
                    setRename={setRename}
                    renameValue={renameValue}
                    setRenameValue={setRenameValue}
                    renameHandler={renameHandler}
                />
            )}
        </div>
    );
};

const SeeMore = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M11 7v2h2V7h-2m3 10v-2h-1v-4h-3v2h1v2h-1v2h4m8-5c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8Z"
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
