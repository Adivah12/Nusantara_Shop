import { Input } from "../Elements/Input/Input";
import { Button } from "../Elements/Button/Button";
import { useState } from "react";

export const FormLogin = () => {
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
  
    const username = event.target.username.value;
    const password = event.target.password.value;
  
    if (username === "" || password === "") {
      setError("Username dan Password wajib di isi!!!");
      return false;
    }
  
    // untuk connect ke php dan disimpan ke database
    try {
      const response = await fetch("http://localhost/uas/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successfully logged in, save username to localStorage
        localStorage.setItem("username", username);
  
        // Redirect or perform other actions
        window.location.href = "/home";
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred while processing your request");
      console.error(error);
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
