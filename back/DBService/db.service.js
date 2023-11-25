const { writeFileSync } = require('fs');
const { v4: uuidv4 } = require('uuid');
class DataBaseService {
  /**
   * @returns {Array} data - regresa  los proveedores
   * @description Obtiene los proveedores de json
   *
   */
  getProveedores() {
    try {
      const data = require('../bd.json');
      return data;
    } catch (error) {
      console.error("💢 | file: db.service.js:getProveedores| error:", error);
    }
  }
  /**
   * @param {Object} proveedor - los datos del proveedor nuevo
   * @returns {Array} data - regresa los proveedores|null sino agrgo nada
   * @description Agrega un nuevo proveedor al json(basse de datos)
   */
  addProveedor(proveedor) {
    try {
      const data = require('../bd.json');
      // Verificar si el proveedor ya existe en los datos
      const proveedorExistente = data.find(p => p.NombreProvedor === proveedor.NombreProvedor);
      if (proveedorExistente) {
        console.log("El proveedor ya existe en la base de datos.");
        return false;
      } else {
        // da un ID
        let id = uuidv4();
        const idnuevo = data.find(p => p.id === id);
        while (idnuevo) {
          id = uuidv4();
          idnuevo = data.find(p => p.id === id);
        }
        proveedor.id = id;
        data.push(proveedor);
        writeFileSync('./bd.json', JSON.stringify(data), (err) => {
          if (err) {
            console.error("💢 | file: db.service.js:addProveedor | error:", error);
          }
        });
        const data2 = require('../bd.json');
        return data2;
      }
    } catch (error) {
      console.error("🟢 | file: db.service.js:addProveedor | error:", error);
    }
  }
  /**
   * @param {String} id - id del proveedor a eliminar
   * @returns {Array} data - regresa los proveedores
   * @description Elimina un proveedor del json(basse de datos)
   */
  deleteProveedor(id) {
    try {
      const data = require('../bd.json');
      const proveedor = data.find(p => p.id === id);
      if (proveedor) {
        const index = data.indexOf(proveedor);
        data.splice(index, 1);
        writeFileSync('./bd.json', JSON.stringify(data), (err) => {
          if (err) {
            console.error("💢 | file: db.service.js:deleteProveedor | error:", error);
          }
        });
        const data2 = require('../bd.json');
        return data2;
      } else {
        console.log("El proveedor no existe en la base de datos.");
        return null;
      }
    } catch (error) {
      console.error("💢 | file: db.service.js:deleteProveedor | error:", error);
    }
  }

  }
module.exports = DataBaseService;
