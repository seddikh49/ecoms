import express from 'express'
import { addOrder, getAllOrders, deleteOrder, updateOrder, updateAllNotifications } from '../controllers/order.js'
import authAdmin from '../middlewares/admin.js'



const orderRouter = express.Router()


orderRouter.post('/add', addOrder)
orderRouter.get('/list', async (req, res, next) => {

  const { origin } = req.headers
  const apiKey = req.headers['x-api-key'];
  if (!origin || origin !== "http://localhost:5000" || apiKey !== process.env.SERVER_API_KEY) {
    return res.status(403).json({ msg: 'Invalid or missing API key' });
  }
  next();
}, getAllOrders)
orderRouter.delete('/delete/:id', deleteOrder)
orderRouter.put('/update/:id', updateOrder)
orderRouter.put('/updateNotifications', updateAllNotifications)






export default orderRouter