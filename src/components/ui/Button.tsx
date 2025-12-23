import { primaryColor, secondaryColor } from "@/constants/colors";

function Button({ name, textSize }: { name: string, textSize : string }) {
  return (
    <div
      className={`px-10 h-16 text-${textSize} headings-font rounded-4xl flex items-center 
      border-3 justify-center hover:cursor-pointer duration-500 shadow-xl 
      hover:text-${secondaryColor} hover:bg-${primaryColor} hover:border-${secondaryColor} 
      hover:shadow-${secondaryColor}0 text-${primaryColor} bg-${secondaryColor} border-${primaryColor} shadow-amber-950`}
    >
      {name}
    </div>
  );
}

export default Button;
