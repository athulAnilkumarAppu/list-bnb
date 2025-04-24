import { useEffect, useState } from "react";
import { GetAdDetailsService } from "../../services/AdService";

const PostAdPage = ({ id }) => {
  const [adList, setAdList] = useState(null);

  useEffect(() => {
    GetAdDetailsService(id, setAdList);
  }, []);

  const onViewAdClick = (ad) => {};
  const oneditAdClick = (ad) => {};
  return (
    <div className="ad-card">
      <img src={adList?.image} alt="Ad preview" className="ad-image" />

      <div className="ad-info">
        <h3>{adList?.title}</h3>
        <p className="ad-location">
          <span>{adList?.date || "Date not available"}</span>
        </p>
        <p className="ad-description">{adList?.description}</p>
        <h4>${adList?.price}</h4>
      </div>

      <div className="ad-actions">
        <button className="view-btn" onClick={() => onViewAdClick(adList)}>
          View
        </button>
        <button className="edit-btn" onClick={() => oneditAdClick(adList)}>
          Edit Ad
        </button>
      </div>
    </div>
  );
};

export default PostAdPage;
