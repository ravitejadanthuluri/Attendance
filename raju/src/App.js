import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function startLogin() {
    setStartTime(new Date());
    setModalIsOpen(false);
  }

  function endLogin() {
    setStartTime(null);
  }

  function getTimeLogged() {
    if (!startTime) {
      return null;
    }
      
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000); // in seconds
    return duration;
  }
  
  // Update current time every second
  setInterval(() => setCurrentTime(new Date()), 1000);

  return (
    <div>
      <Modal isOpen={!startTime && !modalIsOpen}>
        <center>
        <h2>START YOUR DAY</h2>
        <button onClick={() => startLogin()}>Login</button></center>
      </Modal>
      {startTime && (
        <div>
          <center>
          <p>Logged in at: {startTime.toLocaleString()}</p>
          <p>Time Duration: {getTimeLogged()}seconds</p>
          <button onClick={() => endLogin()}>Logout</button>
        
          </center>
        </div>
             
      )}
    </div>
  );
}
export default DigitalClock;

