import { useRouteError } from "react-router-dom";
import { Button } from "../Elements/Button/Button";

export const ErrorPage = () => {
  const error = useRouteError();
  const handleError = () => {
    window.location = "/";
  };
  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-slate-200 [text-shadow:_0_4px_0_rgb(0_0_0_/_100%)] bg-[url('./public/img/bg-error.jpg')] bg-cover">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="font-semibold mt-4 text-3xl">
        404 - Page {error.statusText || error.message}
      </p>
      <Button classname="px-4 py-1" onClick={handleError}>
        Back to Login Page
      </Button>
    </div>
  );
};
