import React from "react";
import { useOutletContext } from "react-router-dom";

import Task from "./Task";

const PendingTasks = () => {
    const { taskList } = useOutletContext();
    const completedTasks = taskList.filter((task) => task.isChecked === false);

    return (
        <div className="mt-1 flex flex-col h-full gap-2 rounded-xl ">
            {completedTasks.map((item) => {
                return <Task key={item.id} task={item} />;
            })}
        </div>
    );
};

export default PendingTasks;
