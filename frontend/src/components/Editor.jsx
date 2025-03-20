import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "./shared/Navbar";
import LeftSidebar from "./LeftSidebar";

const Editor = () => {
  const [code, setCode] = useState("");

  return (
    <div className="box-border h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex-1 flex overflow-hidden"> {/* This will allow the editor to fit the space */}
        {/* Sidebar */}
        <LeftSidebar />

        {/* Monaco Editor */}
        <div className="flex-1 p-4 overflow-hidden">
          <MonacoEditor
            height="88vh"  // Set height to viewport height
            language="javascript"
            theme="vs-dark"
            options={{
              fontSize: 16,
              lineHeight: 24,
              fontFamily: "'Courier New', monospace",
            }}
            value={code}
            onChange={(newValue) => setCode(newValue)}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
