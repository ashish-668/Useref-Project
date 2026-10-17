import { useState, useRef } from "react";
import ButtonChange from "./ButtonChange";


const StopWatch = () => {
  const [count, setcount] = useState(0);

  const countref = useRef(null);
  let start = () => {
    countref.current = setInterval(() => {
      setcount((count) => count + 1);
    }, 100)
  };

  const pause = () => {
    clearInterval(countref.current);
    countref.current = null;
  };

  const restart = () => {
    pause();
    setcount(0);
  };

  return (
    <>
      <section className="min-h-screen w-full flex items-center flex-col justify-center bg-white">
        <div className="max-w-125 w-full mx-auto px-5">
          <div className="w-full flex items-center justify-center mb-7">
            <h2 className="text-bright-orange text-4xl leading-130">
              {count}
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8">

            <button onClick={start} className="cursor-pointer group relative overflow-hidden rounded-[30px_15px_30px_15px] border border-bright-orange bg-bright-orange px-8 py-3 transition-all duration-300 hover:rounded-[15px_30px_15px_30px] active:scale-95">
              <span className="relative z-10 text-base leading-150 text-white transition-colors duration-300 group-hover:text-bright-orange">
                Start
              </span>
              <span className="absolute inset-0 translate-y-[-110%] rounded-[inherit] bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
            </button>

            <button onClick={pause} className="cursor-pointer group relative overflow-hidden rounded-[30px_15px_30px_15px] border border-bright-orange bg-bright-orange px-8 py-3 transition-all duration-300 hover:rounded-[15px_30px_15px_30px] active:scale-95">
              <span className="relative z-10 text-base leading-150 text-white transition-colors duration-300 group-hover:text-bright-orange">
                Pause
              </span>
              <span className="absolute inset-0 translate-y-[-110%] rounded-[inherit] bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
            </button>

            <button onClick={restart} className="cursor-pointer group relative overflow-hidden rounded-[30px_15px_30px_15px] border border-bright-orange bg-bright-orange px-8 py-3 transition-all duration-300 hover:rounded-[15px_30px_15px_30px] active:scale-95">
              <span className="relative z-10 text-base leading-150 text-white transition-colors duration-300 group-hover:text-bright-orange">
                Restart
              </span>
              <span className="absolute inset-0 translate-y-[-110%] rounded-[inherit] bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
            </button>

          </div>
        </div>

        <ButtonChange/>
      </section>
    </>
  );
};

export default StopWatch
