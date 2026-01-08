import { Outlet } from "react-router-dom";
import "../../styles/globals.css";
import Header from "../components/header/Header";
import BackgroundDecor from "../components/background/BackgroundDecor";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="app">
      <BackgroundDecor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
