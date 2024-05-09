"use client";

// Importing necessary dependencies from Next.js, NextAuth, and components
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Logout } from "@/components/index";
import './style.css'

// Navbar component for navigation bar
const Navbar = () => {
  // Retrieve session information using useSession hook
  const { data: session } = useSession();

  return (
    // <nav className="navbar w-full h-2/6 flex backdrop-blur-sm sticky top-0">
    <nav className="navbar backdrop-blur-sm sticky top-0">
      {/* Left section of the navbar */}
      <div className="link-btns">
      {/* <div className="list gap-2 text-center"> */}
        {/* Home link */}
        <Link href="/">
          <button className="link-btn">HOME</button>
        </Link>
        {/* Games link */}
        <Link  href="/games">
          <button className="link-btn">GAMES</button>
        </Link>
        {/* Learn link */}
        <Link href="/learn">
          <button className="link-btn">LEARN</button>
        </Link>
      {/* </div> */}
      {/* Right section of the navbar */}
      {/* <div className="ml-auto mr-4 flex gap-2"> */}
        {/* Conditional rendering based on session existence */}
        {session ? (
          // Display Chat link if session exists
          <Link href="/chat">
            <button className="link-btn">CHAT</button>
          </Link>
        ) : (
          // Display Login link if session doesn't exist
          <Link href="/login">
            <button className="link-btn">LOGIN</button>
          </Link>
        )}
        {/* Conditional rendering based on session existence */}
        {session ? (
          // Display Profile link if session exists
          <Link href="/profile">
            <button className="link-btn">PROFILE</button>
          </Link>
        ) : (
          // Display Register link if session doesn't exist
          <Link href="/register">
            <button className="link-btn">REGISTER</button>
          </Link>
        )}
        {/* Render Logout component if session exists */}
        {session && <div className="link-btn"><Logout /></div>}
      {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;