import React, { useState } from "react";
import Layout from "@/components/layout";
import LoginForm from "@/components/login-input";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import axios from "axios";
import { navigate } from "gatsby";

const Login = () => {
  const [msg, setMsg] = useState("");
  const onLogin = async ({ username, password }) => {
    try {
      await axios.post(
        "http://localhost:4000/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      alert(`Selamat Datang ${username}`);
      navigate("/dashboard/");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Login">
          <LoginForm login={onLogin} msg={msg} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Login;
