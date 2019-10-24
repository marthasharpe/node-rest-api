const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    //store in the database
    product.save().then(result => console.log(result)).catch(error => console.log(error));
    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(201).json({
            message: 'You passed an ID'
        })
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;