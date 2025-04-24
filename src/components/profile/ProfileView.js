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
      <div className="profile-header-card">
        <div className="profile-info-left">
          <img
            src={profileDetails?.image}
            alt="profile"
            className="profile-img"
          />
          <div>
            <h3>{profileDetails?.name}</h3>
            <span className="member-since">
              Member since {profileDetails?.date || "Date not available"}
            </span>
          </div>
        </div>

        <button className="edit-profile-btn" onClick={oneditProfileClick}>
          Edit Profile
        </button>
      </div>

      <div className="contact-info">
        <span>{profileDetails?.location}</span>
        <span>{profileDetails?.email}</span>
        <span>{profileDetails?.phone}</span>
        <span>Provider: {profileDetails?.provider}</span>
      </div>

      <div className="ad-card">
        <img src={adList?.image} alt="ad" className="ad-image" />
        <div className="ad-details">
          <h3>{adList.title}</h3>
          <span className="ad-location">
            {adList.description} • {adList.date || "Date not available"}
          </span>
          <h2 className="ad-price">${adList.price}</h2>
        </div>

        <div className="ad-buttons">
          <button className="view-btn" onClick={() => onViewAdClick(adList)}>
            View
          </button>
          <button className="edit-btn" onClick={() => oneditAdClick(adList)}>
            Edit Ad
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
