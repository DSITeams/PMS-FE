import React, { ReactNode } from "react"

interface FieldsetProps{
    text: string;
    content: ReactNode;
    spanText?: boolean | false;
}

const Fieldset: React.FC<FieldsetProps> = ({ text, spanText, content }) => {
  return (
    <div className="border px-3 rounded-lg text-gray-300 relative">
        <div className="font-bold bg-white flex items-center gap-2 absolute -top-3 left-3 px-1">
            {spanText ? <span className="inline-flex justify-center items-center max-h-[2.5em] text-[14px] font-semibold text-black">{text}</span> : <span className="text-white p-2 rounded-full flex justify-center items-center bg-black w-6 h-6 text-xs">{text}</span>}
        </div>
        <div className="mx-2 mt-8 mb-5">
            {content}
        </div>
    </div>
  )
}

export default Fieldset