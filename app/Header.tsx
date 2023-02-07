import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <header className='sticky top-0 flex items-center justify-between space-x-4 bg-gray-800 text-white p-4 shadow-md'>
      <Link
        href='/'
        className='cursor-pointer'>
        <h1>Zensar Movie</h1>
      </Link>
      <Search />
      <p className='hidden md:inline-block'>Sign In</p>
      <p className='hidden md:inline-block'>Sign Up</p>
      <p>Profile</p>
    </header>
  );
}

export default Header;
