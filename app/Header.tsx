import Search from "./Search";

function Header() {
  return (
    <header className='sticky top-0 flex items-center justify-between space-x-4 bg-gray-800 text-white p-4 shadow-md'>
      <h1>Zensar Movie</h1>
      <Search />
      <p>Sign In</p>
      <p>Sign Up</p>
      <p>Profile</p>
    </header>
  );
}

export default Header;
