import React, { useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Welcome, {name || "Guest"}!</h2>
      <h3>It's great to have you here!</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Welcome;
