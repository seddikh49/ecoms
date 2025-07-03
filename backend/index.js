import express from 'express';
import { sequelize, connect } from './postgres/postgres.js';
import orderRouter from './routes/order.js';
import categoryRouter from './routes/category.js';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import dotenv from 'dotenv';
const app = express();
const port = 3000;
import cors from 'cors'
import authAdmin from './middlewares/admin.js';


const allowedOrigins = [
  'http://localhost:3002',
   'http://localhost:5000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 600
};

app.use(cors(corsOptions));


dotenv.config();

app.use(express.json());
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})




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

