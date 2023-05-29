import React, { useEffect, useState } from "react";
import "./Widget.css";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EmailIcon from "@mui/icons-material/Email";
import { db } from "../Server/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

function Widgets({ type }) {
  const [donorcount, setDonorcount] = useState("");
  const [admincount, setAdmincount] = useState("");
  const [messagecount, setMessagecount] = useState("");

  useEffect(() => {
    const donorquery = query(
      collection(db, "users"),
      where("usertype", "==", "Donor")
    );
    const donorunsubscribe = onSnapshot(donorquery, (snapshot) => {
      setDonorcount(snapshot.docs.length);
    });

    const adminquery = query(
      collection(db, "users"),
      where("usertype", "==", "Admin")
    );
    const adminunsubscribe = onSnapshot(adminquery, (snapshot) => {
      setAdmincount(snapshot.docs.length);
    });

    const messageQuery = collection(db, "Messages");
    const messageunsubscribe = onSnapshot(messageQuery, (snapshot) => {
      setMessagecount(snapshot.docs.length);
    });
    return () => {
      donorunsubscribe();
      adminunsubscribe();
      messageunsubscribe();
    };
  }, []);

  let data;

  switch (type) {
    case "Donor":
      data = {
        title: "Donors",
        count: donorcount,
        icon: <GroupIcon className="Icon" />,
      };
      break;
    case "Admins":
      data = {
        title: "Admins",
        count: admincount,
        icon: <AdminPanelSettingsIcon className="Icon" />,
      };
      break;
    case "Messages":
      data = {
        title: "Messages",
        count: messagecount,
        icon: <EmailIcon className="Icon" />,
      };
      break;
    default:
      data = {
        title: "",
        count: "",
        icon: null,
      };
      break;
  }

  return (
    <div className="widgets">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="count">{data.count}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
}

export default Widgets;
