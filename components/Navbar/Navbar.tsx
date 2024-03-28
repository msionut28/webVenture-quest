"use client";

// Importing necessary dependencies from Next.js, NextAuth, and components
import Link from "next/link";
import { useSession } from "next-auth/react";
import Logout from "../Logout/Logout";

// Navbar component for navigation bar
const Navbar = () => {
  // Retrieve session information using useSession hook
  const { data: session } = useSession();

  return (
    <div className="w-full h-2/6 flex">
      {/* Left section of the navbar */}
      <div className="ml-6 gap-2 flex">
        {/* Home link */}
        <Link href="/">
          <button>HOME</button>
        </Link>
        {/* Games link */}
        <Link href="/games">
          <button>GAMES</button>
        </Link>
        {/* Learn link */}
        <Link href="/learn">
          <button>LEARN</button>
        </Link>
      </div>
      {/* Right section of the navbar */}
      <div className="ml-auto mr-4 flex gap-2">
        {/* Conditional rendering based on session existence */}
        {session ? (
          // Display Chat link if session exists
          <Link href="/chat">
            <button>CHAT</button>
          </Link>
        ) : (
          // Display Login link if session doesn't exist
          <Link href="/login">
            <button>LOGIN</button>
          </Link>
        )}
        {/* Conditional rendering based on session existence */}
        {session ? (
          // Display Profile link if session exists
          <Link href="/profile">
            <button>PROFILE</button>
          </Link>
        ) : (
          // Display Register link if session doesn't exist
          <Link href="/register">
            <button>REGISTER</button>
          </Link>
        )}
        {/* Render Logout component if session exists */}
        {session && <Logout />}
      </div>
    </div>
  );
};

export default Navbar;
