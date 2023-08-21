import React from "react";

const Template = ({ children }) => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold">To Do App</h1>
            </div>
            <div className="mt-8 w-full text-left rounded-lg">
                <h4 className="ml-1 text-xl font-medium">Add new task</h4>
                {children}
            </div>
        </>
    );
};

export default Template;
