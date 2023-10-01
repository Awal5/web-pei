import React, { useState } from "react";
import Layout from "@/components/layout";
import LoginForm from "@/components/login-input";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import axios from "axios";
import { navigate } from "gatsby";
import Toasted from "@/components/atoms/Toast";

// fungsi login
const Login = () => {
  // state message login
  const [msg, setMsg] = useState("");
  // fungsi untuk mengrimkan data ke api
  const onLogin = async ({ username, password }) => {
    try {
      // fetch data dari username dan password user ke url api
      await axios
        .post(
          "http://localhost:4000/auth/login",
          {
            username,
            password,
          },
          // credential yang ada di backend
          { withCredentials: true }
        )
        // respon pesan dari backend
        .then(res => Toasted(`${res.data.message}`, "", "success"));
      // pergike halaman dashboard
      navigate("/dashboard/articles");
    } catch (err) {
      // catch error message
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };
  // return component login
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
