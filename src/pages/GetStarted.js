import React, { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="fadeIn">
        <div
          className="section fadeIn center"
          style={{
            marginTop: "5%",
            marginBottom: "10%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p className="hero gradient-text" style={{ textAlign: "center" }}>
            Create an Account
          </p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <input
                className="input input-sm"
                id="first-name"
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
              />
              <input
                className="input input-sm"
                id="last-name"
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
              />
            </div>
            <input
              className="input"
              id="phone"
              type="tel"
              placeholder="Phone Number"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              className="input"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              className="input"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="gradient-background link"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
