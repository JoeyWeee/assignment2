import express from 'express';
const router = express.Router();
import {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  removeProductById,
  removeAllProducts
} from '../controllers/product.controller.js'; 

// Routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addNewProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', removeProductById);
router.delete('/products', removeAllProducts);


export default router;
