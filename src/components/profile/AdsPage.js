import { useState } from "react";

const AdsPage = () => {
  const [adtitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");

  const onAdtitleChange = (e) => {
    setAdTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onPhotosChange = (e) => {
    setPhotos(e.target.value);
  };

  const onPostClick = () => {};
  return (
    <>
      <label>Ad Title</label>
      <input
        value={adtitle}
        onChange={(e) => onAdtitleChange(e)}
        placeholder="Type here"
        required
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => onDescriptionChange(e)}
        placeholder="Type here"
        required
      />

      <label>Photos</label>
      <input
        value={photos}
        onChange={(e) => onPhotosChange(e)}
        placeholder="Image URL"
        required
      />

      <button onClick={() => onPostClick()}>Post</button>
    </>
  );
};

export default AdsPage;
