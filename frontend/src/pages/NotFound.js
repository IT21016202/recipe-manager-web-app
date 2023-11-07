import React from 'react';

const NotFound = () => {
  const notFoundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  const messageStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <div style={notFoundStyle}>
      <div>
        <p style={messageStyle}>Page Not Found</p>
        <p style={messageStyle}>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
