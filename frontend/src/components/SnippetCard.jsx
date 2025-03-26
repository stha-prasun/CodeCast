import React from "react";
import toast from "react-hot-toast";

const SnippetCard = ({ snippet }) => {
  const handleCopy = async () =>{
    await navigator.clipboard.writeText(snippet?.code);
    toast.success("Code Copied To Clipboard");
  }
  return (
    <div className="bg-base-200 p-4 border border-gray-300 rounded-md flex flex-col gap-2">
      <h2 className="font-medium text-lg">{snippet?.title}</h2>
      <h3 className="font-medium text-lg text-gray-600">{snippet?.description}</h3>
      <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto">
        <code>{snippet?.code}</code>
      </pre>
      <button onClick={handleCopy} className="btn btn-sm btn-outline btn-success self-start">
        Copy Code
      </button>
    </div>
  );
};

export default SnippetCard;
