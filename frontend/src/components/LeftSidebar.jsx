import React from "react";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const { userAction } = useSelector((store) => store.action);

  return (
    <div className="bg-gray-800 h-[92vh] w-60 p-6 flex flex-col items-center space-y-8">
      {/* Sidebar Title */}
      <div className="w-full text-center">
        <h1 className="font-bold text-3xl text-white">Users</h1>
      </div>

      {/* User Avatars Grid */}
      <div className="overflow-y-auto w-full flex-1">
        <div className="grid grid-cols-2 gap-6 p-2">
          {/* Example User Avatar (using DaisyUI avatar component) */}
          <div className="flex justify-center items-center">
            <div className="avatar">
              <div className="w-15 h-15 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>

          {/* Another User Avatar (using DaisyUI avatar component) */}
          <div className="flex justify-center items-center">
            <div className="avatar">
              <div className="w-15 h-15 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full mt-auto space-y-4">
        <button className="btn btn-success w-full">Copy Room ID</button>

        {userAction == "editor" && (
          <button className="btn btn-primary w-full">Save</button>
        )}
        <button className="btn btn-info w-full">Use AI</button>

        <button className="btn btn-secondary w-full">Leave</button>
      </div>
    </div>
  );
};

export default LeftSidebar;
