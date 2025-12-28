import express from 'express';
import {
    createProduct,
    updateProduct,
    toggleProductStatus,
    getProducts,
    getProduct
} from '../controllers/productController.js';

const router = express.Router();

router.post('/', createProduct);
router.put('/:id', updateProduct);
router.patch('/:id/toggle-status', toggleProductStatus);
router.get('/', getProducts);
router.get('/:id', getProduct);

export default router;
