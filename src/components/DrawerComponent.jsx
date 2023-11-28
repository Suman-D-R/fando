import React from "react";
import { Drawer } from "@mui/material";
import "../sass/DrawerComponent.scss";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArchiveIcon from "@mui/icons-material/Archive";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

function DrawerComponent({ drawerState, updateDrawerState }) {
  console.log(drawerState);

  const navigate = useNavigate();

  const handleNavigate = (path)=>{
    navigate(path)
  }
  return (
    <Drawer
      // anchor={anchor}
      open={drawerState}
      onClose={updateDrawerState}
    >
      {/* {list(anchor)} */}
      <div className="drower-list">
        <div className="drawer-list-content" onClick={()=>{handleNavigate('/notes')}}>
          <div>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <LightbulbIcon />
            </IconButton>
          </div>
          <p>notes</p>
        </div>
        <div className="drawer-list-content" >
          <div>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <NotificationsNoneIcon />
            </IconButton>
          </div>
          <p>Reminders</p>
        </div>
        <div className="drawer-list-content">
          <div>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <EditIcon />
            </IconButton>
          </div>
          <p>Edit labels</p>
        </div>
        <div className="drawer-list-content" onClick={()=>{handleNavigate('/archive')}}>
          <div>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <ArchiveIcon />
            </IconButton>
          </div>
          <p>archive</p>
        </div>
        <div className="drawer-list-content" onClick={()=>{handleNavigate('/bin')}}>
          <div>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <DeleteForeverIcon />
            </IconButton>
          </div>
          <p>bin</p>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerComponent;
