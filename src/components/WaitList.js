import React, { useState } from "react";
import "../styles/componentStyles/waitList.css";

import { toast } from "react-hot-toast";
import useDarkMode from "../services/colorMode";

export default function WaitList() {
  const [waitListData, setWaitListData] = useState({
    name: "",
    email: "",
  });

  const isDarkMode = useDarkMode();

  const handleWaitList = (data) => {
    //Validate Data and Send to Database

    console.log(data);
    toast.success(`Welcome to FENYX, ${data.name}`, {
      style: {
        color: isDarkMode ? `var(--white)` : `var(--ember)`,
        background: isDarkMode ? `var(--ember)` : `var(--white)`,
      },
      iconTheme: {
        primary: `linear-gradient(to right, #ffad12, #ff7c3c, #ff4960, #ff1482)`,
        secondary: isDarkMode ? `var(--ember)` : `var(--white)`,
      },
    });
  };

  return (
    <>
      <div id="wait-list">
        <p className=" wait-list-text">
          <span className="subHeader"> Your Future Awaits </span>
          <br /> <br />
          <span className="wait-list-subHeader">
            Join Our Wait list for Premium Investment Insights and Exclusive
            News from the FENYX Team.
          </span>
        </p>
        <div className="center wait-list-container">
          <input
            id="name"
            type="text"
            autoComplete="Name"
            placeholder="Name"
            className="wait-list-input"
            value={waitListData.name}
            onChange={(e) => {
              setWaitListData({ ...waitListData, name: e.target.value });
              console.log(waitListData);
            }}
          />
          <input
            id="email"
            type="email"
            autoComplete="Email"
            placeholder="Email"
            className="wait-list-input"
            value={waitListData.email}
            onChange={(e) => {
              setWaitListData({ ...waitListData, email: e.target.value });
              console.log(waitListData);
            }}
          />
          <button
            id="wait-list-btn"
            className="link"
            onClick={() => handleWaitList(waitListData)}
          >
            Lets Go
          </button>
        </div>
      </div>
    </>
  );
}
