import React, { useState } from "react";
import "/src/assets/Css/login.css"; // Import CSS for styling
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleSubmit = () => {
    if (email.includes("@admin.in")) {
      nav("/user/dashboard");
    } else if (email.includes("@skcet.ac.in")) {
      nav("/user/home");
    }else{
      alert("Please enter your credentials");
    }
  };
  return (
    <div className="login-container">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="login-header">
          <h2>
            Sign In to Your <span style={{ color: "orangered" }}>Account</span>
          </h2>
        </header>
        <div className="social-icons">
          <FaFacebook className="react-icons" />
          <FaLinkedinIn className="react-icons" />
          <IoMdMail className="react-icons" />
        </div>
        <div className="right-half-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <i className="material-icons" style={{ paddingLeft: "10px" }}>
                person
              </i>
              <input
                className="input-field-inputs"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="material-icons">lock</i>
              <input
                className="input-field-inputs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button className="login-btn" type="submit">
              Sign In
            </button>
            <p
              className="login-p"
              style={{
                position: "relative",
                top: "20px",
                marginLeft: "30px",
                fontSize: "18px",
              }}
            >
              Don't you have an account?
              <Link to="/routeTo/signUp" className="login-link">
                <span>Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
