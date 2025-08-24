import React from "react";

function Button({ name }: { name: string }) {
  return (
    <div
      className="px-10 h-16 text-2xl common-font rounded-4xl flex items-center 
      border-3 justify-center hover:cursor-pointer duration-500 shadow-xl 
      hover:text-amber-50 hover:bg-amber-800 hover:border-amber-50 
      hover:shadow-amber-500 text-amber-800 bg-amber-50 border-amber-800 shadow-amber-950"
    >
      {name}
    </div>
  );
}

export default Button;
