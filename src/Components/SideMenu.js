import React, { useState } from "react";
import "./SideMenu.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { auth, db } from "../Server/firebase";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function SideMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDisagree = () => {
    setOpen(false);
    navigate("/admin");
  };

  const handleAgree = () => {
    setOpen(false);
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      //  navigate('/login');
      console.log("admin logout");
      setOpen(true);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div className="center">
      <ul>
        <Link to="/admin" style={{ textDecoration: "none" }} className="link">
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link
          to="/admintable"
          style={{ textDecoration: "none" }}
          className="link"
        >
          <li>
            <AdminPanelSettingsIcon className="icon" />
            <span>Admin-Panel</span>
          </li>
        </Link>
        <Link to="/donor" style={{ textDecoration: "none" }} className="link">
          <li>
            <PeopleIcon className="icon" />
            <span>Donors</span>
          </li>
        </Link>
        <Link to="/message" style={{ textDecoration: "none" }} className="link">
          <li>
            <EmailIcon className="icon" />
            <span>Messages</span>
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
