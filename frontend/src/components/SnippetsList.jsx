import React from "react";
import Navbar from "./shared/Navbar";
import SnippetCard from "./SnippetCard";

const snippets = [
  {
    id: 1,
    title: "React useState Example",
    language: "JavaScript",
    code: "const [count, setCount] = useState(0);",
  },
  {
    id: 2,
    title: "Python Hello World",
    language: "Python",
    code: 'print("Hello, World!")',
  },
  {
    id: 3,
    title: "HTML Button",
    language: "HTML",
    code: '<button class="btn btn-primary">Click Me</button>',
  },
];

const SnippetsList = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Saved Code Snippets</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SnippetsList;
