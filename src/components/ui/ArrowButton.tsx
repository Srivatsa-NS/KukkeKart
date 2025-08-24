function ArrowButton({ name, textSize }: { name: string; textSize: string }) {
  return (
    <div className="flex group group-hover:cursor-pointer">
      <div
        className={`px-5 common-font rounded-4xl flex items-center border-3 justify-center
            duration-500 shadow-xl group-hover:text-amber-50
            group-hover:bg-amber-800 group-hover:border-amber-50 group-hover:shadow-amber-500 
            text-amber-800 bg-amber-50 border-amber-800 shadow-amber-950 text-${textSize}`}
      >
        {name}
      </div>
      <p
        className={`my-3 mx-2 text-${textSize} text-amber-50 transition-transform duration-500 group-hover:translate-x-5`}
      >
        {">>"}
      </p>
    </div>
  );
}

export default ArrowButton;
