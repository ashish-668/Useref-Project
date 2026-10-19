
import React, { useRef, useEffect } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <section className="bg-bright-orange/50 min-h-100 flex items-center justify-center">
        <div className="w-full max-w-125 mx-auto px-5">
            <h2 className="text-3xl text-bright-orange/70 leading-150 mb-10 w-full text-center">
Auto Focus
            </h2>
          <div className="flex items-center justify-center w-full">
            <input
              type="text"
              ref={inputRef}
              placeholder="Type Something"
              className="outline-none border-[0.5px] border-bright-orange text-bright-orange w-full rounded-3xl px-3 py-2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoFocus;
