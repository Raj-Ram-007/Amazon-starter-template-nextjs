import React, { forwardRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div>{faq.open}</div>
      <div className="whitespace-nowrap">
        {faq.open ? "-  " : "+  "}
        {/* {faq.open ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}{" "} */}
        {faq.question}
      </div>
      <div className={faq.open ? "visible px-5 pb-2 " : "invisible "}>
        <p className="text-gray-400">{faq.answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
