
import { useRef } from "react";

const ButtonChange = () => {
    const changebg = useRef(null);

    function changecolor() {
        if (changebg.current.style.backgroundColor === "red") {
            changebg.current.style.backgroundColor = "pink";
            changebg.current.style.color = "red";
        } else {
            changebg.current.style.backgroundColor = "red";
            changebg.current.style.color = "white";
        }
    }

    return (
        <section className="flex items-center justify-center min-h-100 bg-white">
            <div className="mx-auto px-5 max-w-125 w-full">
                <div className="flex flex-col items-center justify-center gap-10 max-w-full w-full">

                    <button onClick={changecolor} className="cursor-pointer group relative overflow-hidden rounded-[30px_15px_30px_15px] border border-bright-orange bg-bright-orange px-8 py-3 w-full max-w-full transition-all duration-300 hover:rounded-[15px_30px_15px_30px] active:scale-95">
                        <span className="relative z-10 text-base leading-150 text-white transition-colors duration-300 group-hover:text-bright-orange">
                            Change
                        </span>
                        <span className="absolute inset-0 translate-y-[-110%] rounded-[inherit] bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
                    </button>

                    <button ref={changebg}
                        style={{ backgroundColor: "red", color: "white" }} className="cursor-pointer text-base leading-150 rounded-[30px_15px_30px_15px] border px-8 py-3 transition-all duration-300 w-full max-w-full">
                        Resulte
                    </button>

                </div>
            </div>
        </section>
    );
};

export default ButtonChange;
