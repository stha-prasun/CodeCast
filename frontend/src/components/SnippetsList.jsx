import React from "react";
import Navbar from "./shared/Navbar";
import SnippetCard from "./SnippetCard";
import { useSelector } from "react-redux";

const SnippetsList = () => {
  const {loggedInUser} = useSelector((store)=>store.auth);
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Saved Code Snippets</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loggedInUser?.snippets.map((snippet) => (
            <SnippetCard key={snippet?._id} snippet={snippet} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SnippetsList;
