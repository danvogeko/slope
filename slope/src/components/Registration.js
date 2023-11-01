import React, { useState } from 'react';
import Birthday from './Birthday';

const Registration = () => {
  const [showBirthdayPage, setShowBirthdayPage] = useState(false);
  const [userName, setUserName] = useState('');
  const [showError, setShowError] = useState(false);

  const handleNextClick = () => {
    if (userName) {
      setShowBirthdayPage(true);
    } else {
      setShowError(true);
    }
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <p>Let's get started, shall we? What's your name?</p>

      {/* Name input field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={handleNameChange}
        />
      </div>

      {/* Button to proceed to Birthday Page */}
      <button onClick={handleNextClick}>Next</button>

      {showError && <p>Please enter your name before proceeding.</p>}
      {showBirthdayPage && <Birthday userName={userName} />}
    </div>
  );
};

export default Registration;