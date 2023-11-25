
import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import axios from 'axios';
import { Button } from '@mui/material';


export const Proveedores = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [proveedores, setProveedores] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🟢 | file: Proveedores.js:15 | currentPage:", currentPage);
        const response = await axios.get('http://localhost:3001/GapsiECommerce/DB/proveedores?limit=5&offset='+currentPage);
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
            <th>Razon Social</th>
            <th>Dirección</th>
            <th>


            </th>

          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td>{proveedor.id}</td>
              <td>{proveedor.NombreProvedor}</td>
              <td>{proveedor.razonSocial}</td>
              <td>{proveedor.Dirección}</td>
              <th>
                <Button
                  onClick={
                    async () => {
                      try {
                        const options = {
                          method: 'DELETE',
                          url: 'http://localhost:3001/GapsiECommerce/DB/proveedor/'+proveedor.id
                        };

                        axios.request(options).then(function (response) {
                            
                          setProveedores(response.data);

                        }).catch(function (error) {
                          console.error(error);
                        });
                      } catch (error) {
                        console.error(error);
                      }
                    }

                  }>
                  Elimianar
                </Button>
              </th>


            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ 'display': 'flex', flexDirection: 'row', 'justifyContent':'right'}}>
        <Button
         variant="outlined"
            size="large"
          onClick={() => setCurrentPage(currentPage - 1)}
        >Anterio</Button>
        <Button
         variant="outlined"
            size="large"
          onClick={() => setCurrentPage(currentPage + 1)}
        >Siguiente</Button>
      </div>
      <Footer />
    </div>
  );
};

