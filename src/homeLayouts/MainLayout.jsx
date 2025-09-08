import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header"
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="z-50"><Header /></header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-56">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
