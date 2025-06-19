import { useState } from "react";

const SubHeroMain = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300); // Reset effect after 300ms
  };

  const actionWords = [
    "Data Modeling",
    "Pipeline Automation",
    "ETL Optimization",
    "Big Data Processing",
    "Real-Time Streaming",
    "Cloud Data Warehousing",
    "Database Tuning",
    "Data Governance",
  ];

  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-yellow scrollbar-track-gray uppercase xl:text-3xl md:text-3xl sm:text-2xl py-8 md:flex-row sm:flex-col items-center">
      <div className="flex gap-12 min-w-full justify-between xl:w-[50%] px-5">
        {actionWords.map((word, index) => (
          <p
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer transition-transform duration-300 ease-in-out transform whitespace-nowrap ${
              clickedIndex === index
                ? "scale-110 text-yellow-300"
                : "hover:scale-105 hover:text-yellow-200"
            }`}
          >
            {word}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
