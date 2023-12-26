import { Input } from "../Elements/Input/Input";
import { Button } from "../Elements/Button/Button";
import { useState } from "react";

export const FormLogin = () => {
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    if (username.value === "" || password.value === "") {
      setError("Username dan Password wajib di isi!!!");
      return false;
    } else {
      window.location.href = "/home";
    }
  };
  return (
    // login section
    <form onSubmit={handleLogin}>
      <Input type="text" name="username" placeholder="Username" />
      <Input type="password" name="password" placeholder="********" />
      <Button children="Login" classname="px-20 ml-2" type="submit" />
      {error && <p className="text-xs ml-2 text-red-500">{error}</p>}
    </form>
  );
};
