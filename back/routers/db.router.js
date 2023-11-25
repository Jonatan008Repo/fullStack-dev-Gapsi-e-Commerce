const express = require('express');
const DataBaseService = require('../DBService/db.service');
const db = express.Router();
const boom = require('@hapi/boom');
//
const dbService = new DataBaseService();
/**
 * @description Obtiene todos los proveedores
 * @returns {Array} proveedores - regresa  los proveedores
 */
db.get('/proveedores', async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const proveedores = dbService.getProveedores(limit, offset);
    res.status(201).json(proveedores);
  } catch (error) {
    next(boom.badRequest(error));
  }
});
/**
 * @description agrega un proveedor ala base
 * @param {Object} proveedor - los datos del proveedor nuevo  por body
*/

db.post('/proveedor', async (req, res, next) => {
  try {
    const proveedor = req.body;
    const proveedores = dbService.addProveedor(proveedor);
    proveedores ? res.status(201).json(proveedores) : res.status(400).json({ error: "El proveedor ya existe en la base de datos." });
  } catch (error) {
    next(boom.badRequest(error));
  }
});
/**
 * @description elimina un proveedor de la base de datos
 * @param {String} id - id del proveedor a eliminar
 */
db.delete('/proveedor/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const proveedores = dbService.deleteProveedor(id);
    proveedores ? res.status(201).json(proveedores) : res.status(400).json({ error: "El proveedor no existe en la base de datos." });
  } catch (error) {
    next(boom.badRequest(error));
  }
});
module.exports = db;
