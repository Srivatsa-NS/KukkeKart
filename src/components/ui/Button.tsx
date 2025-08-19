import React from "react";

function Button({ name, isHovered }: { name: string; isHovered?: boolean }) {
  return (
    <div
      className={`w-48 h-16 text-3xl common-font rounded-4xl flex items-center border-2 justify-center hover:cursor-pointer duration-500 ${
        isHovered
          ? "text-amber-50 bg-amber-800 border-amber-50"
          : "text-amber-800 bg-amber-50 border-amber-800"
      }`}
    >
      {name}
    </div>
  );
}

export default Button;
