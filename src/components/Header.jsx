import React from "react";
import "../sass/Header.scss";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "../assets/google-keep-logo.webp";
import IconButton from '@mui/material/IconButton';
import { Popper } from '@mui/base/Popper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';



function Header({toggleDrawer}) {

   const userName =  localStorage.getItem("userName");
   const email = localStorage.getItem("email");
   const firstLetter = userName.charAt(0).toUpperCase();
   const navigate = useNavigate();
   const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAvathar =(event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  function handleClick(){
    toggleDrawer();
}
const handleClickAway = () => {
  setOpen(false);
};

const canBeOpen = open && Boolean(anchorEl);
const id = canBeOpen ? 'transition-popper' : undefined;

  const handleLogout =()=>{
    localStorage.clear();
    navigate('/')
    
  }

    
  return (
    <header>
      <div className="header-content-one">
        <IconButton onClick={handleClick} type="button" sx={{ p: "10px" }} aria-label="search">
          <DehazeIcon className="header-icons" color="action" > </DehazeIcon>
        </IconButton>
        <img src={logo}></img>
        <h1>keep</h1>
      </div>
      <div className="header-content-two">
        <SearchIcon className="header-icons" color="action"></SearchIcon>
        <ReplayIcon className="header-icons" color="action"></ReplayIcon>
        <ViewStreamIcon className="header-icons" color="action"></ViewStreamIcon>
        <SettingsIcon className="header-icons" color="action"></SettingsIcon>
        <AppsIcon className="header-icons" color="action"></AppsIcon>
        
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className="profile" onClick={handleClickAvathar}>
          <div className="avathar">{firstLetter}</div>
        </div>
        </ClickAwayListener>
        <Popper id={id} open={open} anchorEl={anchorEl} >
        <div className="profile-container">
          <div className="avathar-circle">
            <div>{firstLetter}</div>
          </div>
          <div>{userName}</div>
          <div>{email}
          </div>
          <Button className="logout-button" variant="contained" onClick={handleLogout}>Logout</Button>
          </div>
      </Popper>
      
      </div>
    </header>
  );
}

export default Header;
