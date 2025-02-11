require('dotenv').config();
const express = require('express');
const mongoose = require('./db');
const User = require('./models/User');

const app = express();
app.use(express.json());


app.get('/', (req, res) => res.send("MongoDB Schema Design Working! ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
