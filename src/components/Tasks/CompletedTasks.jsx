import React from "react";
import { useOutletContext } from "react-router-dom";

import Task from "./Task";

const CompletedTasks = () => {
    const { taskList } = useOutletContext();
    const completedTasks = taskList.filter((task) => task.isChecked === true);

    return (
        <div className="mt-1 flex flex-col h-full gap-2 rounded-xl ">
            {completedTasks.map((item) => {
                return <Task key={item.id} task={item} />;
            })}
        </div>
    );
};

export default CompletedTasks;
