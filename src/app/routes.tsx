import type { RouteObject } from "react-router-dom";
import HomePage from "../modules/home/HomePage";
import MainLayout from "../shared/layout/MainLayout";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
];
