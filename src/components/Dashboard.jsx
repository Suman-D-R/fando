import React, { useState } from "react";
import Header from "./Header";
import DrawerComponent from "./DrawerComponent";
import "../sass/Dashboard.scss";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  
  return (
    <div className="dashboard-body">
      <Header toggleDrawer={toggleDrawer} />
      <DrawerComponent
        drawerState={openDrawer}
        updateDrawerState={toggleDrawer}
      />
      <Outlet />
    </div>
  );
}

export default Dashboard;
