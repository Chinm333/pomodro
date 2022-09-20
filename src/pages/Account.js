import "./Account.css";
import React from "react";
import { UserAuth } from "../context/AuthContext";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";
const Account = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="w-[300px] m-auto">
    //   <div>
    //     <p>Welcome, {user?.displayName}</p>
    //   </div>
    //   <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
    //     Logout
    //   </button>
    // </div>
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
};

export default Account;
