import React from 'react';

const Registration = () => {
  return (
    <div>
      <h2>Registration Page</h2>
      <p>Let's get started, shall we? What's your name?</p>

      {/* Name input field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>

      {/* Button to proceed */}
      <button>Continue</button>
    </div>
  );
};

export default Registration;
  