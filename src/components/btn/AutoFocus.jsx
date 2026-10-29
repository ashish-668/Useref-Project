
import React, { useRef, useEffect } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <>
      <section className="bg-bright-orange/50 min-h-100 flex items-center justify-center">
        <div className="w-full max-w-125 mx-auto px-5">
          <h2 className="text-3xl text-bright-orange/70 leading-150 mb-10 w-full text-center">
            Auto Focus
          </h2>
          <div className="flex items-center justify-center gap-5 w-full">
            <input
              type="text"
              ref={inputRef}
              placeholder="Type Something"
              className="outline-none border-[0.5px] border-bright-orange text-bright-orange w-full rounded-3xl px-3 py-2"
            />

            <button onClick={handleFocus}
              className="group relative isolate overflow-hidden cursor-pointer flex shrink-0 px-6 py-1 text-white text-xl font-medium leading-145 bg-bright-orange border border-bright-orange rounded-[5px] shadow-[4px_5px_15px_0px_#FF53001A] transition-colors duration-300 hover:text-bright-orange before:content-[''] before:absolute before:inset-0 before:bg-lite-orange before:scale-x-0 before:origin-right before:bg-white before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
              <span className="relative z-10">
                Focus
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoFocus;
