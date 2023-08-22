import React, { useState } from "react";

const TaskRenamer = ({ setRename, renameValue, setRenameValue, renameHandler }) => {
    const classNames =
        "bg-[#917FB3] px-2 h-12 border-l-8 border-[#E5BEEC] \
         rounded-xl hover:bg-[#8c75b6] duration-200 flex justify-between\
         items-center shadow-2xl shadow-gray-900 absolute top-0 w-full gap-2";

    return (
        <div className={classNames}>
            <input
                type="text"
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                placeholder="Rename"
                className="placeholder:text-[#E5BEEC] border-4 border-[#E5BEEC] focus:outline-none px-2 w-3/4 h-3/4 rounded-xl bg-transparent"
            />
            <div className="flex gap-1 items-center">
                <div className="cursor-pointer" onClick={() => {
                    renameHandler();
                    setRename(false);
                    setRenameValue("");
                }}>
                    <Correct />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        setRename(false)
                        setRenameValue("");
                    }}
                >
                    <Cancel />
                </div>
            </div>
        </div>
    );
};

// Icons --------------------------------

const Correct = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
            ></path>
        </svg>
    );
};

const Cancel = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z"
            ></path>
        </svg>
    );
};

export default TaskRenamer;
