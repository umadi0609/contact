// UpdateContact.js

import React, { useState } from "react";

const UpdateContact = ({ contact, onUpdateContact }) => {
  const [updatedContact, setUpdatedContact] = useState({ ...contact });

  const handleChange = (e) => {
    setUpdatedContact({
      ...updatedContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    onUpdateContact(updatedContact);
  };

  return (
    <div className="item">
      <div className="content">
        <input
          type="text"
          name="name"
          value={updatedContact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={updatedContact.email}
          onChange={handleChange}
        />
        {/* Add other input fields for additional contact information */}
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateContact;
