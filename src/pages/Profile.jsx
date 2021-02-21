import { useContext, useState } from "react";
import { AuthContext } from "../app";

const Profile = () => {
  let { authRes, setAuthRes } = useContext(AuthContext);

  let [correctInfo, setCorrectInfo] = useState([]);

  let fetchData = () => {
    if (authRes.userdata.type === "seller") {
    }
  };

  return (
    <>
      <div className="sell">
        <div className="sell_nav">
          <div className="sell_nav-logo logo">
            Man<span className="span">deal</span>
          </div>
          <div className="sell_nav-profile">
            <img
              src="./images/icons/avatar.png"
              alt=""
              className="sell_nav-profile-avatar"
            />
          </div>
        </div>
        <hr className=" mu" />

        <div
          style={{
            widows: "100%",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            margin: "20px",
          }}
        >
          <h1>Welcome {authRes.userdata.name}</h1>
          <h3>Profile id - </h3> {authRes.userdata._id} <br />
          <h3>Phone - </h3> {authRes.userdata.phone} <br />
          <h3>User type - </h3>{" "}
          <div className="span">
            <b>{authRes.userdata.type}</b>
          </div>
          <br />
        </div>
        <div
          style={{
            widows: "100%",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            margin: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="span">
              <b>We did not found any items sold</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
