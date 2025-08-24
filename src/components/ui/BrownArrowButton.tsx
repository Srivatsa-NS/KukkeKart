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
            duration-500 shadow-xl group-hover:text-amber-800
            group-hover:bg-amber-50 group-hover:border-amber-800 group-hover:shadow-amber-950 
            text-amber-50 bg-amber-800 border-amber-50 shadow-gray-500`}
      >
        {name}
      </div>
      <p
        className={`my-3 mx-2 text-${textSize} text-amber-800 group-hover:translate-x-5 duration-500`}
      >
        {">>"}
      </p>
    </div>
  );
}

export default BrownArrowButton;
