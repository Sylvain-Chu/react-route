import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root, {
    loader as rootLoader,
} from "./routes/home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        loader: rootLoader,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);