import React, { useState } from 'react';

const ReserveForm = ({ selectedAppointment }) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [selectedItem, setSelectedItem] = useState(selectedAppointment);


  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div>
      <h1>Reserve Form</h1>
      <form>
        <select value={selectedItem} onChange={handleItemChange}>
          <option value={selectedAppointment} disabled>
            {selectedAppointment} ()
          </option>
          {/* Other option elements */}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReserveForm

