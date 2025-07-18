import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar custom-navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            {/* Mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-xl text-white" style={{ marginLeft: "50px" }}>
            Kelompok I
          </a>
        </div>

        {/* MENU DESKTOP */}
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            style={{ marginRight: "400px" }}
          >
            <li>
              <NavLink
                to="/"
                style={{ marginRight: "100px" }}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-white"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={{ marginLeft: "100px" }}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-white"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
