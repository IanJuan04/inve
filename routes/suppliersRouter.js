import express from 'express';
import supplierController from '../controllers/supplierController.js';

const suppliersRouter = express.Router();

suppliersRouter.get('/', supplierController.getAllSuppliers);
suppliersRouter.post('/', supplierController.createSuplier);
suppliersRouter.delete('/:id', supplierController.deleteSupplier); 

export default suppliersRouter;