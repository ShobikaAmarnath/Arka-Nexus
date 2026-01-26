import type { RouteObject } from "react-router-dom";
import NotFoundPage from "../shared/not-found/NotFoundPage";
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
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesLandingPage /> },
      { path: "services/:slug", element: <ServicesPage /> },
      { path: "instruments", element: <InstrumentsPage /> },
      { path: "snapshots", element: <SnapshotsPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
