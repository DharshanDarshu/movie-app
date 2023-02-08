import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between space-x-4 bg-gray-800 text-white p-4 shadow-md'>
      <Link
        href='/'
        className='cursor-pointer'>
        <div className='w-[80px] h-[40px]'>
          <Image
            src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/iglvru0hrrhdhq54flql'
            width={100}
            height={50}
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
