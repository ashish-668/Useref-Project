
import { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ShowHidePassword = () => {
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
        if (passwordRef.current.type === "password") {
            passwordRef.current.type = "text";
            setShowPassword(true);
        } else {
            passwordRef.current.type = "password";
            setShowPassword(false);
        }
    }

    return (
        <section className="min-h-100 flex items-center justify-center bg-pink-200">
            <div className="mx-auto max-w-125 px-5  w-full">
                <h2 className="text-white/70 text-3xl leading-150 w-full text-center mb-10">
Enter Password 
                </h2>
                <div className=" flex items-center px-3 py-2 justify-between gap-3 bg-white border border-black/30 rounded-4xl">
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Enter password"
                        className="outline-none w-full py-2 px-3 rounded-4xl bg-white border border-black/30"
                    />
                    <button
                        type="button"
                        onClick={togglePassword}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="p-2 border-none bg-white"
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShowHidePassword;
