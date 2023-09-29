import React from 'react'

const Message = ({msg, type}) => {
    let bgColor;

    if (type === 'success') {
      bgColor = '#28a745'; 
    } else {
        //error
      bgColor = '#dc3545'; 
    } 
  
    const styles = {
      padding: '1rem',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      backgroundColor: bgColor,
    };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}

export default Message