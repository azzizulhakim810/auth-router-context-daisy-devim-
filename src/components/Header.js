import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user?.email);

  const handleLogOut = () => {
    logOut()
    .then(()=> {
      console.log('logged out successfully');
    })
    .catch(error => {
      console.error('logout error',error);
    })
    console.log('log out');
  }

  return (
    <div>
      <div className="bg-neutral text-neutral-content ">
        <div className="navbar pt-6 pb-6 lg:w-4/5 m-auto">
          <div className="navbar-start">

            {/* Hamburger Menu Added  */}

            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/home">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>

            {/* Logo Added */}

            <Link className="btn btn-ghost normal-case text-xl">DEVIM</Link>
          </div>

          {/* Normal Navmenu Added  */}

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Login/Registration Button Added */}

          <div className="navbar-end">
            <div>
              {user?.uid && <h2>{user.displayName || user.email}</h2>}
            </div>

            <div>
              {
                user?.uid ? 
                <button onClick={handleLogOut} className="btn">
              LOGOUT
            </button> : 
            <Link to="/login" className="btn">
            LOGIN
          </Link>
            
              }
          
            </div>

            <div className="pl-3">
              <Link to="/registration" className="btn">
                REGISTRATION
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
