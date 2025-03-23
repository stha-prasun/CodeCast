import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "./shared/Navbar";
import LeftSidebar from "./LeftSidebar";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:8080");

const Editor = () => {
  const {roomID} = useSelector((store)=>store.room);
  const [code, setCode] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("activeUsers", (users) => {
      setUsers(users);
    });

    // Listen for code updates from the server
    socket.on("codeUpdate", (newCode) => {
      setCode(newCode);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("codeUpdate");
      socket.off("activeUsers");
    };
  }, [roomID]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit("codeChange", newCode, roomID);
  };

  return (
    <div className="box-border h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <LeftSidebar users={users} />

        {/* Monaco Editor */}
        <div className="flex-1 p-4 overflow-hidden">
          <MonacoEditor
            height="88vh"
            language="javascript"
            theme="vs-dark"
            options={{
              fontSize: 16,
              lineHeight: 24,
              fontFamily: "'Courier New', monospace",
            }}
            value={code}
            onChange={handleCodeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
