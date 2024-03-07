import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-2/6 flex">
      <div className="ml-6 gap-2 flex">
        <Link href="/">
          <button className="roboto">HOME</button>
        </Link>
        <Link href="/games">
          <button className="roboto">GAMES</button>
        </Link>
        <Link href="/learn">
          <button className="roboto">LEARN</button>
        </Link>
      </div>
      <div className="ml-auto mr-4 flex gap-2">
        <Link href="/profile">
          <button className="roboto">PROFILE</button>
        </Link>
        <Link href="/login">
          <button className="roboto">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
