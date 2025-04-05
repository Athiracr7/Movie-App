import React, { useState } from "react";
import "./Signup.css"; // Import CSS for styling

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !phone) {
      setError("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits!");
      return;
    }

    console.log("Signing up with:", { name, email, password, phone });

    // Clear form fields and error message after successful signup
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setError("");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            className="signup-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="signup-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
