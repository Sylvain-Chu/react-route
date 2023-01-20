import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home, {
    loader as rootLoader,
} from "./routes/home";
import Anime from "./routes/anime.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        loader: rootLoader,
        children: [
            {
                path: "/anime/:id",
                element: <Anime/>,
                loader: rootLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);