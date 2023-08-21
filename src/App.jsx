import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import {
    AllTasks,
    PendingTasks,
    CompletedTasks,
    TaskInfo,
    Task,
} from "./components";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<AllTasks />} />
                <Route path="pending" element={<PendingTasks />} />
                <Route path="completed" element={<CompletedTasks />} />
                <Route path=":id" element={<TaskInfo />} />
            </Route>
        </Routes>
    );
};

export default App;
