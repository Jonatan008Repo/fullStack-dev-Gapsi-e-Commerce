
import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import axios from 'axios';


export const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/GapsiECommerce/DB/proveedores');
        setProveedores(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#004990', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header style={{ alignSelf: 'flex-start' }} />

      <h1>Proveedores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            {/* Agrega más columnas según tus necesidades */}
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td>{proveedor.id}</td>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.direccion}</td>
              {/* Agrega más celdas según tus necesidades */}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

