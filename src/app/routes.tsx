import type { RouteObject } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import HomePage from "../modules/home/HomePage";
import AboutPage from "../modules/about/AboutPage";

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
    {
        path: "/about",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <AboutPage />,
            },
        ],
    }
];
