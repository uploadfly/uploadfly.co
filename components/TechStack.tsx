"use client";
import { useState } from "react";
import {
  SiReact,
  SiExpress,
  SiGo,
  SiLaravel,
  SiPython,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";
import SyntaxHighlighter from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { stackCodes } from "./stackCodes";

const TechStack = () => {
  const stacks = [
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
    },
    {
      name: "Go",
      icon: <SiGo />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
    },
    {
      name: "Python",
      icon: <SiPython />,
    },
  ];
  const [selectedStack, setSelectedStack] = useState<string>(stacks[0].name);

  return (
    <div className="py-5">
      <h1 className="shiny-text text-center text-4xl mt-5">
        Intergrate with your stack
      </h1>
      <div className="flex items-center gap-14 justify-center mt-10">
        {stacks.map((stack, i) => (
          <div
            className="flex flex-col items-center group cursor-pointer"
            onClick={(e) => setSelectedStack(stack.name)}
            key={i}
          >
            <div
              className={`text-2xl border border-gray-400 p-4 rounded-md ${
                selectedStack === stack.name
                  ? "text-accent"
                  : "text-slate-400 group-hover:text-slate-100 transition-colors"
              }`}
            >
              {stack.icon}
            </div>
            <p
              className={`mt-2 ${
                selectedStack === stack.name
                  ? "text-slate-100"
                  : "text-slate-400 group-hover:text-slate-100 transition-colors"
              }`}
            >
              {stack.name}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto mt-5 rounded-md border-slate-400 border-[1px]">
        <SyntaxHighlighter
          language="javascript"
          style={qtcreatorDark}
          customStyle={{
            borderRadius: "7px",
          }}
        >
          {stackCodes.find((c) => c.name === selectedStack)?.code as string}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default TechStack;
