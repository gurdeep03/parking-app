const Parking = require('../models/userModels');
const asyncHandler = require('express-async-handler');

const getspots = asyncHandler(async (req, res) => {
    try {
        const parkingSpots = await Parking.find();
        res.status(200).json(parkingSpots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.module = { getspots }; 