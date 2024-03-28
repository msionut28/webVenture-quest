"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full h-2/6 flex">
      <div className="ml-6 gap-2 flex">
        <Link href="/">
          <button>HOME</button>
        </Link>
        <Link href="/games">
          <button>GAMES</button>
        </Link>
        <Link href="/learn">
          <button>LEARN</button>
        </Link>
      </div>
      <div className="ml-auto mr-4 flex gap-2">
        {session ? (
          <Link href="/chat">
            <button>CHAT</button>
          </Link>
        ) : (
          <Link href="/login">
            <button>LOGIN</button>
          </Link>
        )}
        {session ? (
          <Link href="/profile">
            <button>PROFILE</button>
          </Link>
        ) : (
          <Link href="/register">
            <button>REGISTER</button>
          </Link>
        )}
        {session && (
          <Link href="/api/auth/signout">
            <button>
              Sign Out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;