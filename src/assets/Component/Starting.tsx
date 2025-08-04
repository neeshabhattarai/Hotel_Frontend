import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Testmonial from "./Testmonial";
import Footer from "./Footer";

function Starting() {
  return (
    <div className="w-lvw flex flex-col gap-5">
      <Outlet />
      <Testmonial />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Starting;
