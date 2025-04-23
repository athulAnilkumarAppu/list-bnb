import { useState } from "react";

const ProfileView = ({ setSelectedMenu }) => {
  const [profileDetails, setProfileDetails] = useState(null);
  const [adList, setAdList] = useState([]);

  const oneditProfileClick = () => {
    setSelectedMenu("profile");
  };

  const onViewAdClick = (ad) => {};
  const oneditAdClick = (ad) => {};

  return (
    <>
      <img src={profileDetails?.profileImage} alt="profile" />
      <div>Member since {profileDetails?.membershipDate}</div>

      <button onClick={() => oneditProfileClick()}>Edit Profile</button>

      <div>
        <span>{profileDetails?.location}</span>
        <span>{profileDetails?.email}</span>{" "}
        <span>{profileDetails?.phone}</span>
      </div>

      {adList?.length > 0 &&
        adList.map((item) => {
          return (
            <div>
              <img src={item?.adImage} alt="profile" />
              <h3>{item.adName}</h3>
              <span>{item.location}</span>
              <span>{item.postedDate}</span>

              <h1>$ {item.price}</h1>

              <button onClick={() => onViewAdClick(item)}>View</button>
              <button onClick={() => oneditAdClick(item)}>Edit Ad</button>
            </div>
          );
        })}
    </>
  );
};

export default ProfileView;
