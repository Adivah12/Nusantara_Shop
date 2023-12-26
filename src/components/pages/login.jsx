import { FormLogin } from "../Fragments/FormLogin";

export const LoginPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className="w-full mx-2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold italic text-teal-700 mb-6">
            Nusantara <span className="block ml-14 text-slate-700">Shop</span>
          </h1>
          <p className="text-gray-600 mb-4">Local E-Commerce</p>
          <FormLogin />
          <div className="my-3">
            <a href="#" className="underline text-slate-500 italic">
              Forgot Password ?
            </a>
          </div>
        </div>
      </div>
      {/* img section */}
      <div className="flex w-4/6">
        <div className="flex items-center">
          <img
            src="/img/banner.jpg"
            alt=""
            className="rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
      </div>
    </div>
  );
};
