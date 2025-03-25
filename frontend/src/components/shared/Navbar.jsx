import React from "react";
import { FaCode } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {loggedInUser} = useSelector((store)=>store.auth);
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm pl-20 pr-20">
        <div className="flex-1">
          <div className="flex items-center gap-2">
          <span><FaCode className="font-bold" size={20}/></span>
          <h1 className="font-bold text-2xl hover:cursor-pointer">CodeCast</h1>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="avatar"
                  src={loggedInUser?.profilePic}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <p className="justify-between">{loggedInUser?.fullname}</p>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
