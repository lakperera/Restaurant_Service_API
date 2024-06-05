import React from "react";
import { Route ,BrowserRouter ,Routes } from "react-router-dom";
import RestaurantList from './components/RestaurantList';
import UpdateRestaurant from './components/UpdateRestaurant';
import CreateRestaurant from "./components/CreateRestaurant";
import RestaurantDetails from "./components/RestaurantDetails";
import DeleteRestaurant from "./components/DeleteRestaurant";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RestaurantList/>}/>
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/create" element={<CreateRestaurant />} />
      <Route path="/update/:id" element={<UpdateRestaurant />} />
      <Route path="/delete/:id" element={<DeleteRestaurant />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
