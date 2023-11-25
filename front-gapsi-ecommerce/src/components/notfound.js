/* eslint-disable */
import React from 'react';
//import not from '../../assets/404.png';
export function NotFound() {
  return (
    <div
      style={{ backgroundColor: '#004990', height: '100vh', width: '100%', display: 'flex' }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div
          style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <center>
            <h1 style={{ fontFamily: "Montserrat" }}>¡Upps!</h1>
            <h1 style={{ fontFamily: "Montserrat" }}>No pudimos encontrar esta página.</h1>
          </center>
        </div>
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
        </div>
      </div>
    </div>
  );
}