const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/ReservationController');
const { verifyAccessToken } = require('../Helpers/JwtHelper');

router.post('/create', verifyAccessToken, ReservationController.createReservation);
router.get('/user', verifyAccessToken, ReservationController.getUserReservations);
router.get('/vendor', verifyAccessToken, ReservationController.getVendorReservations);
router.delete('/cancel/:reservationId', verifyAccessToken, ReservationController.cancelReservation);

module.exports = router;