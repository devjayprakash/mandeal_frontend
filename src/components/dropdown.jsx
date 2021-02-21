import React, { useContext } from "react";
import { AuthContext } from "../app";

const ProfileDropdown = ({ isOpen }) => {
  let { authRes, setAuthRes } = useContext(AuthContext);

  return (
    <div
      className="dropdown"
      style={{
        marginTop: isOpen === true ? "10px" : "20px",
        opacity: isOpen === true ? "1" : "0",
      }}
    >
      <ul>
        <li
          onClick={() => {
            document.cookie = "";
            setAuthRes({
              auth: false,
              userdata: null,
            });
          }}
        >
          <img src={"/images/icons/logout.svg"} width={20} height={20} /> Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
