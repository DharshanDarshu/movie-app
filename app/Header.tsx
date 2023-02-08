import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between space-x-4 bg-gray-800 text-white p-4 shadow-md'>
      <Link
        href='/'
        className='cursor-pointer'>
        <div className='w-[80px] h-[30px]'>
          <Image
            src='https://www.99corporates.com/CompanyLogo/U72900PN2018PLC174305.png'
            width={100}
            height={40}
            alt='zensar logo'
          />
        </div>
      </Link>
      <Search />
      <p className='hidden md:inline-block'>Sign In</p>
      <p className='hidden md:inline-block'>Sign Up</p>
      <p>Profile</p>
    </header>
  );
}

export default Header;
