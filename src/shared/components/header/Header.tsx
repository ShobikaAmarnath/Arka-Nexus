import { useState } from 'react';
import Navbar from "./Navbar";

export default function Header() {
    const [, setIsContactModalOpen] = useState(false);
  return (
    <header style={{ position: "relative", overflow: "hidden" }}>
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
    </header>
  );
}
