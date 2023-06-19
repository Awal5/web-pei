import React, { useState, useEffect } from "react";
import "@/css/dashboard.css";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { navigate } from "gatsby";
import "@/css/dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LayoutDashboard from "@/components/dashboard/layout";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

const Dashboard = ({ children }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [exp, setExp] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await Axios.get("http://localhost:4000/auth/token");
      console.log(response);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUsername(decoded.username);
      setExp(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const axiosJWT = Axios.create();

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

  const onLogout = async () => {
    try {
      await Axios.delete("http://localhost:4000/auth/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
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
