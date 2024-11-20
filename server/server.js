const express = require('express');
const parkingRoutes = require('./routes/ParkingRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDb } = require('./config/Dbconnection');
const cors = require('cors');

connectDb();
const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Import and use ParkingRoutes
app.use('/parking', parkingRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});