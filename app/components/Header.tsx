"use client"

import Navbar from "./Navbar";

export default function Header() {
  // Header now delegates rendering to the extracted `Navbar` component.
  return <Navbar />;
}
