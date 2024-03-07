import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-2/6 bg-slate-500 gap-2 flex">
      <Link href="/">
        <button>HOME</button>
      </Link>
      <Link href="/games">
        <button>GAMES</button>
      </Link>
      <Link href="/learn">
        <button>LEARN</button>
      </Link>
      <div className="ml-auto mr-4 flex gap-2">
      <Link href="/profile">
        <button>PROFILE</button>
      </Link>
      <Link href="/login">
        <button>LOGIN</button>
      </Link>
      </div>
    </div>
  );
};
export default Navbar;
