const express = require('express');
const router =express.Router();
const restaurantController = require('../controller/restaurant');
const validate =require('../middleware/validation');
const { check } = require('express-validator');

router.get('/',restaurantController.getAllRestaurants);

router.post('/',
    [
        check('name').not().isEmpty().withMessage('Name is required'),
        check('address').not().isEmpty().withMessage('Address is required'),
        check('telephone').not().isEmpty().withMessage('telephone is required')
    ],
    validate,
    restaurantController.createRestaurant);

router.get('/:id', restaurantController.getRestaurantById);

router.put('/:id',
    [
        check('name').optional().not().isEmpty().withMessage('Name cannot be empty'),
        check('address').optional().not().isEmpty().withMessage('Address cannot be empty'),
        check('cuisine').optional().not().isEmpty().withMessage('Cuisine cannot be empty')
    ],
    validate,
    restaurantController.updateRestaurant);

router.delete('/:id', restaurantController.deleteRestaurant);


module.exports = router;