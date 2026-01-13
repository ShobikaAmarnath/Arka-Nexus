import type { RouteObject } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import HomePage from "../modules/home/HomePage";
import AboutPage from "../modules/about/AboutPage";
import ServicesLandingPage from "../modules/services/ServiceLandingPage";

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
    },
    {
        path: "/services",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <ServicesLandingPage />,
            },
        ],
    }
];
