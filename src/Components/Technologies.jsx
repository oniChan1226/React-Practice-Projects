import React from "react";
import MongoIcon from "../assets/mongodb-icon.svg";
import ExpressIcon from "../assets/expressjs-icon.svg";
import ReactIcon from "../assets/reactjs-icon.svg";
import NodeIcon from "../assets/nodejs-icon.svg";

const Technologies = ({ techs }) => {
  return (
    <div>
      <div className="mt-2 gap-2 grid md:grid-cols-2 xl:grid-cols-3 ">
        {techs.map((tech) => (
          <span
            key={tech.id}
            className="border border-textColors-secondary px-2 py-1 rounded-full text-sm text-white text-center"
          >
            #{tech.name}
          </span>
        ))}
      </div>

      <div>
        <h2 className="md:text-xl text-textColors-accent mt-3 tracking-widest font-medium">
          MERN
        </h2>

        <div className="flex justify-around items-center mt-4 xl:mt-12 space-x-8">

          {/* MongoDB (M) */}
          <div className="relative group flex flex-col items-center">
            <img src={MongoIcon} alt="MongoDB" className="w-12" />
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-12 group-hover:translate-y-0 top-[-50%] bg-green-600 text-white text-base px-4 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              MongoDB
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-600"></span>
            </span>
            <span className="text-xl text-center text-green-600 mt-2">M</span>
          </div>

          {/* Express (E) */}
          <div className="relative group flex flex-col items-center">
            <img src={ExpressIcon} alt="Express" className="w-12" />
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-12 group-hover:translate-y-0 top-[-50%] bg-white text-black text-base px-4 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              Express
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></span>
            </span>
            <span className="text-xl text-center text-black mt-2">E</span>
          </div>

          {/* React (R) */}
          <div className="relative group flex flex-col items-center">
            <img src={ReactIcon} alt="React" className="w-12" />
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-12 group-hover:translate-y-0 top-[-50%] bg-[#61dbfb] text-black text-base px-4 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              React
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#61dbfb]"></span>
            </span>
            <span className="text-xl text-center text-[#61dbfb] mt-2">R</span>
          </div>

          {/* Node.js (N) */}
          <div className="relative group flex flex-col items-center">
            <img src={NodeIcon} alt="Node.js" className="w-12" />
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-12 group-hover:translate-y-0 top-[-50%] bg-[#68a063] text-black text-base px-4 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              Node.js
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#68a063]"></span>
            </span>
            <span className="text-xl text-center text-[#68a063] mt-2">N</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Technologies;
