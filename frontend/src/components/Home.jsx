import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
import { IoIosCreate } from "react-icons/io";
import { FaPlus, FaCode, FaInfo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUserAction } from "../redux/userActionSlice";

const Home = () => {
  const [currentDate, setCurrentDate] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);

  const {loggedInUser} = useSelector((store)=>store.auth);
  // if(!loggedInUser){
  //   navigate("/login");
  // }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center gap-12 mt-40">

        {/* Icons Div */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <button onClick={()=>{
              dispatch(setUserAction("editor"));
              navigate("/editor");
              }} className="btn btn-warning h-16 w-16 rounded-xl flex items-center justify-center shadow-lg">
              <IoIosCreate size={30} className="text-white" />
            </button>
            <span>
              <p className="mt-2 text-sm text-center">New Code</p>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={()=>dispatch(setUserAction("viewer"))} className="btn btn-primary h-16 w-16 rounded-xl flex items-center justify-center shadow-lg">
              <FaPlus size={30} className="text-white" />
            </button>
            <span>
              <p className="mt-2 text-sm text-center">Join Room</p>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <button className="btn btn-primary h-16 w-16 rounded-xl flex items-center justify-center shadow-lg">
              <FaCode size={30} className="text-white" />
            </button>
            <span>
              <p className="mt-2 text-sm text-center">View Snippets</p>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <button className="btn btn-primary h-16 w-16 rounded-xl flex items-center justify-center shadow-lg">
              <FaInfo size={30} className="text-white" />
            </button>
            <span>
              <p className="mt-2 text-sm text-center">About Us</p>
            </span>
          </div>
        </div>

        {/* Image Div */}
        <div className="flex flex-col items-center ml-10">
          <img className="h-64 rounded-3xl shadow-xl mb-4" src="/img.jpg" alt="img"/>
          <h1 className="text-xl font-semibold">{currentDate}</h1>
          <h1 className="text-lg text-gray-700">{`Welcome, ${loggedInUser?.name}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
