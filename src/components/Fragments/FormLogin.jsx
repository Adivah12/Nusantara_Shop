import { Input } from "../Elements/Input/Input";
import { Button } from "../Elements/Button/Button";
import { useState } from "react";

export const FormLogin = () => {
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === "" || password === "") {
      setError("Username dan Password wajib di isi!!!");
      return;
    }

    // Simpan data di sisi klien, misalnya dalam local storage
    localStorage.setItem("username", username);

    // Redirect atau lakukan tindakan lain
    window.location.href = "/home";
  };

  return (
    // Formulir login
    <form onSubmit={handleLogin}>
      <Input type="text" name="username" placeholder="Username" />
      <Input type="password" name="password" placeholder="********" />
      <Button children="Login" classname="px-20 ml-2" type="submit" />
      {error && <p className="text-xs ml-2 text-red-500">{error}</p>}
    </form>
  );
};
