import express from 'express';
const router = express.Router();
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getTopProducts,
  updateProduct,
  getProducts,
  getProductById,
  // updateStock,
} from '../controllers/productController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

// router.put('/test', protect, admin, updateStock);

export default router;
