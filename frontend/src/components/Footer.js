import React from 'react'

const Footer = () => {
  return (
    <div style={footerDiv}>
        <h3 style={footerText}>© 2023 Recipe Master, Inc. All rights reserved.</h3>
    </div>
  )
}

const footerDiv = {
    backgroundColor: '#f5f5f5',
    height: '50px',
    marginTop: '30px',
    paddingTop: '20px',
    marginBottom: '10px',
}

const footerText = {
    textAlign: 'center',
    fontSize: '15px',
    fontFamily: 'cursive',
}

export default Footer