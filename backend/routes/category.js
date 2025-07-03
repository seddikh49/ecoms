import express from 'express'
import { addCategory, getAllCategories, deleteCategory, updateCategory } from '../controllers/category.js'
import authAdmin from '../middlewares/admin.js'



const categoryRouter = express.Router()


categoryRouter.post('/add', addCategory)
categoryRouter.get('/list', getAllCategories)
categoryRouter.delete('/delete/:id', deleteCategory)
categoryRouter.put('/update/:id', updateCategory)







export default categoryRouter