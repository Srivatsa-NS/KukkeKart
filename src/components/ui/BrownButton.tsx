import React from "react";

function BrownButton({ name, textSize }: { name: string; textSize: string }) {
  return (
    <div
      className={`px-6 text-${textSize} common-font rounded-4xl flex items-center 
      justify-center hover:cursor-pointer duration-500 shadow-xl 
      border-3 hover:text-amber-800 hover:bg-amber-50 
      hover:border-amber-800 hover:shadow-amber-950 
      text-amber-50 bg-amber-800 shadow-gray-500`}
    >
      {name}
    </div>
  );
}

export default BrownButton;
