import { primaryColor, secondaryColor } from "@/constants/colors";

function BrownButton({ name, textSize }: { name: string; textSize: string }) {
  return (
    <div
      className={`px-6 ${textSize} body-font rounded-4xl flex items-center 
      justify-center hover:cursor-pointer duration-500 shadow-xl 
      border-3 hover:text-${primaryColor} hover:bg-${secondaryColor} 
      hover:border-${primaryColor} hover:shadow-amber-950 
      text-${secondaryColor} bg-${primaryColor} shadow-gray-500`}
    >
      {name}
    </div>
  );
}

export default BrownButton;
