const Restaurant = require('../models/resturent');

exports.getAllRestaurants = async(req , res) => {
    try{
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.createRestaurant = async (req, res) => {
    const restaurant = new Restaurant({
      name: req.body.name,
      address: req.body.address,
      telephone: req.body.telephone,
    });
    try {
      const newRestaurant = await restaurant.save();
      res.status(201).json(newRestaurant);
    } catch (err) {
      res.status(400).json({ message: err.message });
      console.log('error');
    }
  };

// retrieve data from server

exports.getRestaurantById = async (req, res) => {
    console.log(req.params.id);
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (restaurant == null) {
        return res.status(404).json({ message: 'Cannot find restaurant' });
      }
      res.json(restaurant);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// update the restaurant

exports.updateRestaurant = async (req, res) => {
  
  try{
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant == null) {
      return res.status(404).json({message:'Restaurant not found'});
    }
    if(req.body.id !==null) {
      restaurant.address = req.body.address;
    }
    if(req.body.id !== null) {
      restaurant.name = req.body.name;
      // console.log(req.body.name)
    }
    if(req.body.id !== null) {
      restaurant.telephone = req.body.telephone;
    }
    const updateRestaurant = await restaurant.save();
    res.json(updateRestaurant);
  }catch(err){
    res.status(400).json({ message: err.message });
  }
  
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant == null) {
      return res.status(404).json({ message: 'Cannot find restaurant' });
    }

    await Restaurant.deleteOne({ _id: req.params.id });
    res.json({ message: 'Deleted restaurant' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};