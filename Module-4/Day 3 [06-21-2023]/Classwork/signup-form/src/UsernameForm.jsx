import { useState } from "react";

const UsernameForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 30px",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default UsernameForm;
