const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('..models/order');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was fetched'
    })
});

router.post('/', (req, res, next) => {
    const order = {
        productID: req.body.productID,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order: order
    })
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;