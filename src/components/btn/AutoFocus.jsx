
import React, { useRef, useEffect } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <section className="bg-pink-200 min-h-100 flex items-center justify-center">
        <div className="w-full max-w-125 mx-auto px-5">
          <div className="flex items-center justify-center w-full">
            <input
              type="text"
              ref={inputRef}
              placeholder="Type Something"
              className="outline-none border-[0.5px] border-black/50 rounded-3xl px-2.5 py-1.5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoFocus;
