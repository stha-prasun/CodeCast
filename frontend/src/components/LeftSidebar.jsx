import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CODE_API_ENDPOINT } from "../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";

const LeftSidebar = ({ users, code }) => {
  const { userAction } = useSelector((store) => store.action);
  const { loggedInUser } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${CODE_API_ENDPOINT}/save`,
        {
          title: input.name,
          description: input.description,
          code,
          userID: loggedInUser?._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setInput({
          name: "",
          description: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }

    // Close modal after saving
    document.getElementById("my_modal_3").close();
  };

  return (
    <div className="bg-gray-800 h-[92vh] w-60 p-6 flex flex-col items-center space-y-8">
      {/* Sidebar Title */}
      <div className="w-full text-center">
        <h1 className="font-bold text-3xl text-white">Users</h1>
      </div>

      {/* User Avatars Grid */}
      <div className="overflow-y-auto w-full flex-1">
        <div className="grid grid-cols-2 gap-6 p-2">
          {users?.map((user, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="avatar">
                <div className="w-15 h-15 rounded-full">
                  <img src={user?.profilePic} alt="User Avatar" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full mt-auto space-y-4">
        <button className="btn btn-success w-full">Copy Room ID</button>

        {userAction === "editor" && (
          <>
            {/* Button to open the modal */}
            <button
              className="btn btn-primary w-full"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Save
            </button>

            {/* Modal */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  ✕
                </button>

                {/* Modal Title */}
                <h3 className="font-bold text-lg">Save Code</h3>

                {/* Form for saving data */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <label className="form-control w-full">
                    <span className="label-text font-medium">Name</span>
                    <input
                      type="text"
                      placeholder="Enter a name"
                      className="input input-bordered w-full"
                      name="name"
                      value={input.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  {/* Description Input */}
                  <label className="form-control w-full">
                    <span className="label-text font-medium">Description</span>
                    <textarea
                      placeholder="Enter a description"
                      className="textarea textarea-bordered w-full"
                      rows="3"
                      name="description"
                      value={input.description}
                      onChange={handleChange}
                    ></textarea>
                  </label>

                  {/* Save Button */}
                  <div className="modal-action">
                    <button type="submit" className="btn btn-success w-full">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </>
        )}
        <button className="btn btn-info w-full">Use AI</button>
        <button className="btn btn-secondary w-full">Leave</button>
      </div>
    </div>
  );
};

export default LeftSidebar;
