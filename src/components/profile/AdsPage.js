import { useState } from "react";
import { CreateAdService } from "../../services/AdService";

const AdsPage = () => {
  const [adtitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [price, setPrice] = useState("");

  const onAdtitleChange = (e) => {
    setAdTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onPhotosChange = (e) => {
    setPhotos(e.target.value);
  };

  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };

  const onPostClick = () => {
    CreateAdService({
      title: adtitle,
      price: price,
      description: description,
      image: photos,
    });
  };
  return (
    <div className="post-ad-form">
      <label>Ad Title*</label>
      <input
        value={adtitle}
        onChange={(e) => onAdtitleChange(e)}
        placeholder="Type here"
        required
      />

      <label>Price*</label>
      <input
        value={price}
        onChange={(e) => onPriceChange(e)}
        placeholder="Type here"
        required
      />

      <label>Description*</label>
      <textarea
        value={description}
        onChange={(e) => onDescriptionChange(e)}
        placeholder="Type here"
        required
        rows={5}
      />

      <label>Photos*</label>
      <input
        value={photos}
        onChange={(e) => onPhotosChange(e)}
        placeholder="Image URL"
        required
      />

      <button className="post-btn" onClick={onPostClick}>
        Post
      </button>
    </div>
  );
};

export default AdsPage;
