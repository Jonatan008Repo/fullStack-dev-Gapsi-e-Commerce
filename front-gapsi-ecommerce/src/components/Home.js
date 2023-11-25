import React, { useEffect, useState } from "react";
import { Header } from './Header';
import { Footer } from "./Footer";
import { useNavigate, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";
import '../App.css';

export function Home() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handelList = async () => {
    try {

      navigate("/Proveedores");
    } catch (error) {
      console.error("🔶 | error", error);
    }
  }
  useEffect(() => {
    const requset = async () => {
      try {
        const options = { method: 'GET', url: 'http://localhost:3001/GapsiECommerce/Api/home' };
        axios.request(options).then(function (response) {
          setData(response.data);
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
    <div style={{ backgroundColor: '#004990', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header style={{ alignSelf: 'flex-start' }} />

      {data ? (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img src="../assets/img/101581397.png" alt="imagen" style={{ width: '100px', height: '100px' }} />
          <p>{data.message}  0{data.numero}</p>
          <Button
            id="btn-google"
            variant="outlined"
            size="large"
            onClick={handelList}
          >Continuar
          </Button>
        </div>
      ) : (<p>no hay datos</p>)
      }
      <Footer />
    </div>
  );
}
