import express from 'express';
import { sequelize, connect } from './postgres/postgres.js';
import orderRouter from './routes/order.js';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import dotenv from 'dotenv';
const app = express();
const port = 3000;
import cors from 'cors'
app.use(cors());

dotenv.config();

app.use(express.json());
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/user', userRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



// app.listen(port, () => {
//   console.log(`✅ Server running on http://localhost:${port}`);
// });



// connect().then(() => {
//   sequelize.sync()
//     .then(() => {
//       console.log("✅ Database synced");
//     })
//     .catch((err) => {
//       console.error("❌ Error syncing database:", err);
//     });
// });
const startServer = async () => {
  try {
    await connect(); // الاتصال بقاعدة البيانات
    await sequelize.sync({ alter: true }); // إنشاء أو تعديل الجداول
    console.log("✅ Database synced");

    app.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();