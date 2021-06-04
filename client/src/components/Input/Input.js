import React from 'react';

import './Input.scss';

export const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && sendMessage(event)}
      />
      <button className="sendButton" onClick={(event) => sendMessage(event.target.value)}>
        Send
      </button>
    </form>
  );
};
