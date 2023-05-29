import React, { useState } from "react";
import { Button } from "reactstrap";
import "./OnboardSignup.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Server/firebase";
import { UserAuth } from "../../Server/context/Authcontext";
import volunteer2 from "../../Assets/volunteer2.jpg";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function OnboardSignup() {
  const navigate = useNavigate();
  const { googleSignIn } = UserAuth();
  const [open, setOpen] = useState(false);

  const handleEmailRegistration = () => {
    navigate("/signup");
  };

  const handleDisagree = () => {
    setOpen(false);
    navigate("/onboardsignup");
  };

  const handleAgree = () => {
    setOpen(false);
    navigate("/signup");
  };

  const handleGoogleRegistration = async () => {
    try {
      await googleSignIn();
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="homepage">
      <div className="content">
        <h1>Choose the Registering method</h1>
        <div className="buttons">
          <Button color="primary" onClick={handleEmailRegistration}>
            Register with Email
          </Button>
          <Button color="secondary" onClick={handleGoogleRegistration}>
            Register with Google
          </Button>
          {/* alert */}

          <Dialog
            open={open}
            onClose={handleDisagree}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Even though you signup with google You have to go through the
                normal registering process
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

          {/* close */}
          <div className="image">
            <img src={volunteer2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardSignup;
