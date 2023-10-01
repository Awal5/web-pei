import React, { useState, useEffect } from "react";
import "@/css/dashboard.css";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { navigate } from "gatsby";
import "@/css/dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import LayoutDashboard from "@/components/dashboard/layout";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

const Dashboard = ({ children }) => {
  // deklarasi state
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [exp, setExp] = useState("");

  // fetch refresh token
  useEffect(() => {
    refreshToken();
  }, []);

  // fungsi refresh token
  const refreshToken = async () => {
    try {
      //fetch data token
      const response = await Axios.get("http://localhost:4000/auth/token");
      //set token ke state
      setToken(response.data.accessToken);
      //decode token
      const decoded = jwt_decode(response.data.accessToken);
      //set username dari hasil decode token
      setUsername(decoded.username);
      //set exp dari hasil decode token
      setExp(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  //membuat instance axios
  const axiosJWT = Axios.create();

  //middleware
  axiosJWT.interceptors.request.use(
    async config => {
      const currentDate = new Date();
      if (exp * 1000 < currentDate.getTime()) {
        response = await Axios.get("http://localhost:4000/auth/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setUsername(decoded.username);
        setExp(decoded.exp);
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  const getAdmin = async () => {
    const response = await axiosJWT.get(`http://localhost:4000/auth/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // fungsi logout
  const onLogout = async () => {
    await Axios.delete("http://localhost:4000/auth/logout").then(() =>
      navigate("/login")
    );
  };
  return (
    <LayoutDashboard pageTitle="Dashboard">
      <Header logout={onLogout} />
      <div className="container-fluid">
        <div className="row">
          <Sidebar username={username} />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
