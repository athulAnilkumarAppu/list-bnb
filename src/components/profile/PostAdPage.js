import { useState } from "react";

const PostAdPage = () => {
  const [adList, setAdList] = useState([]);

  const onViewAdClick = (ad) => {};
  const oneditAdClick = (ad) => {};
  return (
    <>
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

export default PostAdPage;
