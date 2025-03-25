import React from "react";

const SnippetCard = ({ snippet }) => {
  return (
    <div className="bg-base-200 p-4 border border-gray-300 rounded-md flex flex-col gap-2">
      <h2 className="font-medium text-lg">{snippet.title}</h2>
      <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto">
        <code>{snippet.code}</code>
      </pre>
      <button className="btn btn-sm btn-primary self-start">
        View In Editor
      </button>
    </div>
  );
};

export default SnippetCard;
