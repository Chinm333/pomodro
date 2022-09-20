import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className="Signinpage">
      <h1 className="text-center text-3xl font-bold py-8 signin">LOGIN</h1>
      <div
        className="max-w-[240px] m-auto py-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GoogleButton className="goggleButton" onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
