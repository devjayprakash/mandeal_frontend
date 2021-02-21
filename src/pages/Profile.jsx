import Logo from "../components/logo";

const Profile = () => {
  return (
    <div className="profile">
      <div className="nav">
        <Logo />
      </div>
      <div className="profile-pic">
        <img src="/images/rice.jpg" alt="" />
      </div>
      <div className="profile-details">
        <div className="profile-details--name">Randum naam</div>
        <div className="profile-details--work">Kamm Dham</div>
        <div className="profile-details--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et
          sequi voluptate deleniti, fuga cupiditate minus totam temporibus
          tenetur cum, laudantium eveniet expedita magnam explicabo eligendi
          consequuntur veniam harum ad.
        </div>
      </div>
    </div>
  );
};

export default Profile;
