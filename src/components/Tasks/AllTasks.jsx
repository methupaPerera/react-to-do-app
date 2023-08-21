import React from "react";
import { useOutletContext } from "react-router-dom";
import Task from "./Task";

const AllTask = () => {
    const { taskList } = useOutletContext();
    return (
        <div className="mt-1 flex flex-col h-full gap-2 rounded-xl ">
            {taskList.map((item) => {
                return <Task key={item.id} task={item} />;
            })}
        </div>
    );
};

export default AllTask;
