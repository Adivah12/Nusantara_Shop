import { FormLogin } from "../Fragments/FormLogin";
import { useRef } from "react";

export const LoginPage = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Mulai kembali video setelah selesai
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div className="w-full h-screen relative">
      <video
        ref={videoRef}
        src="/img/bg-vid-3.mp4"
        className="w-full h-full object-cover absolute inset-0"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        onError={(e) => console.error("Error occurred:", e)}
      ></video>
      <div className="relative z-10 h-full flex">
        <div className="flex flex-col justify-center items-center ml-36 bg-slate-300 bg-opacity-10 backdrop-blur-md p-12 my-32 rounded-md">
          <h1 className="flex justify-center text-5xl italic text-slate-200 font-allan border-b w-full pb-6 mb-6 [text-shadow:0_3px_0_rgb(64_64_64/_100%)]">
            Login
          </h1>
          <FormLogin />
          <div className="my-3">
            <a
              href="#"
              className="underline text-slate-500 hover:text-slate-200 italic duration-150"
            >
              Forgot Password ?
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-6xl font-bold italic text-teal-600 [text-shadow:0_3px_0_rgb(32_32_32/_100%)]">
            Nusantara <span className="text-slate-300">Shop</span>
          </h1>
          <p className="text-gray-300">
            Local E-Commerce Terbaik Di Indonesia...
          </p>
        </div>
      </div>
    </div>
  );
};
