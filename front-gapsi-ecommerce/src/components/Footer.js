import React, { useEffect, useState } from 'react';
import axios from "axios";
export function Footer() {
  const [ver, setVer] = useState(null);
  useEffect(() => {
    const requset = async () => {
      try {
        const options = { method: 'GET', url: 'http://localhost:3001/GapsiECommerce/Api/ver' };
        axios.request(options).then(function (response) {
          setVer(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      } catch (error) {
        console.log("🟢 | file: api.js:14 | error:", error);
      }
    };
    requset();
  }, []);
  return (
    <div style={{ width: '100%', backgroundColor: 'gray',   height: '30px'}}>
      {ver ? (
        <p style={{ textAlign: 'right', }}>Versión:{ver}</p>) :
        (<p style={{ textAlign: 'right', }}>Cargando...</p>
        )
      }
    </div>
  );
}
