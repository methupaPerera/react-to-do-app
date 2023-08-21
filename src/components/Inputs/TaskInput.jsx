import React from "react";

const TaskInputter = ({ value, onChange, onClick }) => {
    const classNames = {
        input: "rounded-l-xl px-3 bg-transparent w-full border-4 \
        border-[#917FB3] placeholder:text-[#917FB3] focus:outline-none",
        button: "text-center bg-[#917FB3] hover:bg-[#8770b2] duration-300 \
        text-[#2A2F4F] p-2 font-bold w-28 rounded-r-xl",
    };

    return (
        <div className="flex h-12 mt-3">
            <input
                type="text"
                placeholder="Add new item"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={classNames.input}
            />
            <button onClick={onClick} className={classNames.button}>
                Add
            </button>
        </div>
    );
};

export default TaskInputter;
