import React, { useState } from 'react';

const Birthday = ({ userName }) => {
  const [birthday, setBirthday] = useState('');

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  return (
    <div>
      <h2>Birthday Page</h2>
      <p>Sup, {userName}? When's your birthday?:</p>

      {/* Birthday input field */}
      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="text"
          id="birthday"
          name="birthday"
          value={birthday}
          onChange={handleBirthdayChange}
        />
      </div>

      {/* Continue button */}
      <button>Continue</button>
    </div>
  );
};

export default Birthday;