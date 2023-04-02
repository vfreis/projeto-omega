import { createContext, useEffect, useState } from "react";
import { login, signupApi } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = async (email, senha) => {
    const { data } = await login({ email, senha });

    if (data) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("user_token", JSON.stringify({ email, token }));
      setUser({ email, senha });
      return { success: true, message: "" };
    } else {
      return { success: false, message: "E-mail ou senha incorretos" };
    }
  };

  const signup = async (nome, dataNascimento, sexo, email, telefone, senha) => {
    const { data } = await signupApi({
      nome,
      dataNascimento,
      sexo,
      email,
      telefone,
      senha,
    });

    if (data === "exists") {
      return { success: false, message: "Já tem uma conta com esse E-mail" };
    }

    return { success: true, message: "" };
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
