import { primaryColor, secondaryColor } from "@/constants/colors";

function ArrowButton({ name, textSize }: { name: string; textSize: string }) {
  return (
    <div className="flex group group-hover:cursor-pointer">
      <div
        className={`px-5 common-font rounded-4xl flex items-center border-3 justify-center
            duration-500 shadow-xl group-hover:text-${secondaryColor}
            group-hover:bg-${primaryColor} group-hover:border-${secondaryColor} group-hover:shadow-${secondaryColor}0 
            text-${primaryColor} bg-${secondaryColor} border-${primaryColor} shadow-amber-950 text-${textSize}`}
      >
        {name}
      </div>
      <p
        className={`my-3 mx-2 text-${textSize} text-${secondaryColor} transition-transform duration-500 group-hover:translate-x-5`}
      >
        {">>"}
      </p>
    </div>
  );
}

export default ArrowButton;
