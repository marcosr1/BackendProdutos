import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import Product from './models/Product.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('', productRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }) 
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => console.log(`Servidor rodando na porta ${PORT}`));
    })
    .catch(err => console.log(err));
