import React from "react";
import WaitList from "../components/WaitList";
import BasicFooter from "../components/BasicFooter";

export default function GetStarted() {
  return (
    <>
      <div className="fadeIn">
        <div
          className="section fadeIn center"
          style={{ marginTop: "40%", marginBottom: "40%" }}
        >
          <WaitList />
        </div>
        <BasicFooter />
      </div>{" "}
    </>
  );
}
