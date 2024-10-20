import React from "react";

const Technologies = ({ techs }) => {
  return (
    <div className="mt-3 gap-1 grid grid-cols-2">
        {
            techs.map(tech => (

            <span key={tech.id} className="border border-textColors-secondary px-2 py-1 rounded-full text-sm text-textColors-secondary text-center">
                #{tech.name}
            </span>
            ))
        }
    </div>
  );
};

export default Technologies;
