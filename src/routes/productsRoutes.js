const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');
const upload = require('../middlewares/multer'); 



router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post('/', productsController.store);
router.post('/', upload.single('image'), productsController.store);
router.get('/detail/:id', productsController.detail);
router.get('/edit/:id', productsController.edit);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.destroy);

module.exports = router;