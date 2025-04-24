import { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const onContactChange = (e) => {
    setContactNumber(e.target.value);
  };

  const onSaveClick = () => {};

  return (
    <div className="profile-edit-form">
      <label>Name*</label>
      <input
        value={name}
        onChange={(e) => onNameChange(e)}
        placeholder="Type here"
        required
      />

      <label>Email*</label>
      <input
        value={email}
        onChange={(e) => onEmailChange(e)}
        placeholder="Type here"
        required
      />

      <label>Username*</label>
      <input
        value={username}
        onChange={(e) => onUsernameChange(e)}
        placeholder="Type here"
        required
      />

      <label>Photo*</label>
      <input
        value={imageUrl}
        onChange={(e) => onImageUrlChange(e)}
        placeholder="Image URL"
        required
      />

      <label>Location*</label>
      <input
        value={location}
        onChange={(e) => onLocationChange(e)}
        placeholder="Type here"
        required
      />

      <label>Contact Number*</label>
      <input
        value={contactNumber}
        onChange={(e) => onContactChange(e)}
        placeholder="Type here"
        required
      />

      <button className="save-btn" onClick={onSaveClick}>
        Save
      </button>
    </div>
  );
};

export default EditProfile;
