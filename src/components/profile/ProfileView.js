import { useEffect, useState } from "react";
import { GetAdDetailsService } from "../../services/AdService";

const ProfileView = ({ setSelectedMenu, profileDetails, id }) => {
  const [adList, setAdList] = useState({});

  useEffect(() => {
    GetAdDetailsService(id, setAdList);
  }, []);

  const oneditProfileClick = () => {
    setSelectedMenu("profile");
  };

  const onViewAdClick = (ad) => {};
  const oneditAdClick = (ad) => {};

  return (
    <>
      <img src={profileDetails?.image} alt="profile" />
      <div>
        Member since{" "}
        {profileDetails?.date ? profileDetails.date : "date not available"}
      </div>

      <button onClick={() => oneditProfileClick()}>Edit Profile</button>

      <div>
        <span>{profileDetails?.location}</span>
        <span>{profileDetails?.email}</span>{" "}
        <span>{profileDetails?.phone}</span>
        <span>Provider: {profileDetails?.provider}</span>
      </div>

      <div>
        <img src={adList?.image} alt="profile" />
        <h3>{adList.title}</h3>
        <span>{adList.description}</span>
        <span>{adList.date ? adList.date : "Date not available"}</span>

        <h1>$ {adList.price}</h1>

        <button onClick={() => onViewAdClick(adList)}>View</button>
        <button onClick={() => oneditAdClick(adList)}>Edit Ad</button>
      </div>
    </>
  );
};

export default ProfileView;
