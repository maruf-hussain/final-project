import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = <>
    <li><Link to='/'>HOME</Link></li>
    <li><Link to='dashboard'>DASHBOARD</Link></li>
    <li> <Link to="/menu">OUR MENU</Link></li>
    <li><Link>CONTACT US</Link></li>
  </>

  return (
    <>
      <div className="navbar max-w-7xl  fixed z-10 bg-opacity-10 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-yellow-400 font-extrabold font-serif">Maruf's <span className="text-white">Food</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;