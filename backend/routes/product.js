import express from 'express'
import { addProduct, removeProducts, singleProduct, listProducts,updateProduct } from '../controllers/product.js'
import upload from '../middlewares/multer.js'

import authAdmin from '../middlewares/admin.js'
// authAdmin,

const productRouter = express.Router()

// authAdmin, 

productRouter.post('/add', authAdmin, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addProduct)

productRouter.post('/single', authAdmin, singleProduct)
productRouter.post('/remove', authAdmin, removeProducts)
productRouter.post('/update-product',upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]),updateProduct)


productRouter.get('/list', async (req, res, next) => {
  console.log(req.headers)
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.SERVER_API_KEY) {
    return res.status(403).json({ msg: 'Invalid or missing API key' });
  }
  next();
}, listProducts)
productRouter.get('/admin-list', authAdmin, listProducts)



export default productRouter