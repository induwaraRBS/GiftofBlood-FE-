import React, { useState } from "react";
import "./Donormenu.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Server/firebase";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function SideMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  const handleDisagree = () => {
    setOpen(false);
    navigate("/profile/:userId");
  };

  const handleAgree = () => {
    setOpen(false);
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Call the signOut method from Firebase Auth
      console.log("user logout");
      setOpen(true);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div className="center1">
      <ul>
        <Link
          to="/Profile/:id"
          style={{ textDecoration: "none" }}
          className="link"
        >
          <li>
            <DashboardIcon className="icon" />
            <span>Profile</span>
          </li>
        </Link>

        <li
          onClick={handleLogout}
          style={{ textDecoration: "none" }}
          className="link1"
        >
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you Really want to Logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleDisagree}>
            Disagree
          </Button>
          <Button color="error" onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SideMenu;
