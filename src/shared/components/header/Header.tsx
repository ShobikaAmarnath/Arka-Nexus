import { useState } from "react";
import Navbar from "./Navbar";
import ContactModal from "../contact/ContactModal";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <>
      <header style={{ position: "relative", overflow: "hidden" }}>
        <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      </header>
      <AnimatePresence>
        {isContactModalOpen && (
          <ContactModal onClose={() => setIsContactModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
