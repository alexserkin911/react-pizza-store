require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const pizzaRoutes = require('./routes/pizzaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/', pizzaRoutes);

app.listen(PORT, console.log(`Server starting on PORT: ${PORT}`));
