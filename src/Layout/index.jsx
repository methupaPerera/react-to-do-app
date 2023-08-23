import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Template from "./Template";
import { Navbar, TaskInput } from "../components";

const Layout = () => {
    const [taskInputValue, setTaskInputValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [index, setIndex] = useState(0);

    // Retireving the local storage values onload if exist
    useEffect(() => {
        const storedTaskList = localStorage.getItem("taskList");
        const storedIndex = localStorage.getItem("index");

        if (storedTaskList) {
            setTaskList(JSON.parse(storedTaskList));
        } else {
            localStorage.setItem("taskList", JSON.stringify(taskList));
        }

        if (storedIndex) {
            setIndex(parseInt(storedIndex));
        } else {
            localStorage.setItem("index", JSON.stringify(index));
        }
    }, []);

    const taskHandler = () => {
        // Cheching if the task input is empty
        if (taskInputValue.trim() === "") {
            alert("Please write a task!");
            return;
        }

        // Saving the index to local storage
        const newIndex = index + 1;
        localStorage.setItem("index", JSON.stringify(newIndex));

        // Setting the task to the variable and local storage
        const newTaskList = [
            ...taskList,
            {
                id: newIndex,
                text: taskInputValue,
                date:
                    `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`,
                isChecked: false,
            },
        ];
        localStorage.setItem("taskList", JSON.stringify(newTaskList));

        // Resetting input values after clicking add.
        setTaskList(newTaskList);
        setTaskInputValue("");
        setIndex(newIndex);
    };

    const classNames =
        "w-80 sm:w-[28rem] h-[30rem] flex flex-col bg-[#2A2F4F] \
         p-6 text-white rounded-3xl shadow-2xl shadow-gray-900 overflow-hidden";

    return (
        <div className={classNames}>
            <Template>
                <TaskInput
                    value={taskInputValue}
                    onChange={setTaskInputValue}
                    onClick={taskHandler}
                />
            </Template>
            <Navbar setTaskList={setTaskList} taskList={taskList} setIndex={setIndex} />
            <div className="rounded-xl overflow-y-scroll">
                <Outlet context={{ taskList, setTaskList }} />
            </div>
        </div>
    );
};

export default Layout;
