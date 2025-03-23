import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
import { IoIosCreate } from "react-icons/io";
import { FaPlus, FaCode, FaInfo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUserAction } from "../redux/userActionSlice";
import io from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';
import { setRoomID } from "../redux/roomSlice";

const socket = io.connect("http://localhost:8080");

const Home = () => {
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);

  const { loggedInUser } = useSelector((store) => store.auth);
  // if(!loggedInUser){
  //   navigate("/login");
  // }

  const handleNewCode = () => {
    socket.emit("userJoined", loggedInUser?._id);
    dispatch(setUserAction("editor"));
    navigate("/editor");
    dispatch(setRoomID(uuidv4()));
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center gap-12 mt-40">
        {/* Icons Div */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <button
              onClick={handleNewCode}
              className="btn btn-warning h-16 w-16 rounded-xl flex items-center justify-center shadow-lg"
            >
              <IoIosCreate size={30} className="text-white" />
            </button>
            <span>
              <p className="mt-2 text-sm text-center">New Code</p>
            </span>
          </div>
          <div className="flex flex-col items-center">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-primary h-16 w-16 rounded-xl flex items-center justify-center shadow-lg"
              onClick={() => {
                document.getElementById("my_modal_3").showModal();
                dispatch(setUserAction("viewer"));
              }}
            >
              <FaPlus size={30} className="text-white" />
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* Close button */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Join Room</h3>
                <p className="py-2">Enter the room ID to join:</p>

                <div className="flex flex-col gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Enter Room ID"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary w-full">Join Room</button>
                </div>
              </div>
            </dialog>

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
          <img
            className="h-64 rounded-3xl shadow-xl mb-4"
            src="/img.jpg"
            alt="img"
          />
          <h1 className="text-xl font-semibold">{currentDate}</h1>
          <h1 className="text-lg text-gray-700">{`Welcome, ${loggedInUser?.fullname}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
