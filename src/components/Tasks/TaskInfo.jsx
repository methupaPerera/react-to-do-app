import React from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";

const TaskInfo = () => {
    const { id } = useParams();
    const { taskList } = useOutletContext();

    const foundObj = taskList.find((obj) => obj.id == id);
    console.log(foundObj.id)

    return (
        <div className="bg-[#917FB3] rounded-xl p-4 h-44 sm:h-52">
            <div>
                <Link to=".." className="underline font-medium">
                    Back
                </Link>
            </div>
            <div className="mt-4 text-lg font-medium">
                <div>
                    Task - {foundObj.text}
                </div>
                <div>
                    State - {foundObj.isChecked ? "Completed" : "Pending"}
                </div>
                <div>
                    Date - {foundObj.date}
                </div>
            </div>
        </div>
    );
};

export default TaskInfo;
