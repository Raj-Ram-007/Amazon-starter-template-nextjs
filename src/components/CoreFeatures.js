// import React, { forwardRef } from "react";
// import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";
import { FaAngleDown as ArrowDown } from "react-icons/fa";
import { FaAngleUp as ArrowUp } from "react-icons/fa";

function CoreFeatures({ CoreFeatures, index, toggleCoreFeatures }) {
  return (
    <div
      className={"CoreFeatures " + (CoreFeatures.open ? "open" : "")}
      key={index}
      onClick={() => toggleCoreFeatures(index)}
    >
      {/* <div>{CoreFeatures.open}</div> */}
      <div className="flex items-center justify-between whitespace-normal">
        {CoreFeatures.question}
        {CoreFeatures.open ? <ArrowUp /> : <ArrowDown />}
      </div>
      <div className={CoreFeatures.open ? "visible px-5" : "invisible h-0"}>
        <p className="text-gray-400">{CoreFeatures.answer}</p>
      </div>
      <div className="border-b-2 "></div>
    </div>
  );
}

export default CoreFeatures;
