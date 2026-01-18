import type { RouteObject } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import HomePage from "../modules/home/pages/HomePage";
import AboutPage from "../modules/about/pages/AboutPage";
import ServicesLandingPage from "../modules/services/pages/ServiceLandingPage";
import ServicesPage from "../modules/services/pages/ServicePage";
import InstrumentsPage from "../modules/instruments/pages/InstrumentsPage";
import SnapshotsPage from "../modules/snapshots/pages/SnapshotsPage";

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
    },
    {
        path: "/services/:slug",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <ServicesPage />,
            },
        ],
    },
    {
        path: "/instruments",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <InstrumentsPage />,
            },
        ],
    },
    {
        path: "/snapshots",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <SnapshotsPage />,
            },
        ],
    }
];
