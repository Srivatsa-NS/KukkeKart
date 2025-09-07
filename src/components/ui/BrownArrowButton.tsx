import { primaryColor, secondaryColor } from "@/constants/colors";

function BrownArrowButton({
  name,
  textSize,
}: {
  name: string;
  textSize: string;
}) {
  return (
    <div className="flex group hover:cursor-pointer">
      <div
        className={`px-5 text-${textSize} common-font rounded-4xl flex items-center border-3 justify-center
            duration-500 shadow-xl group-hover:text-${primaryColor}
            group-hover:bg-${secondaryColor} group-hover:border-${primaryColor} group-hover:shadow-amber-950 
            text-${secondaryColor} bg-${primaryColor} border-${secondaryColor} shadow-gray-500`}
      >
        {name}
      </div>
      <p
        className={`my-3 mx-2 text-${textSize} text-${primaryColor} group-hover:translate-x-5 duration-500`}
      >
        {">>"}
      </p>
    </div>
  );
}

export default BrownArrowButton;
