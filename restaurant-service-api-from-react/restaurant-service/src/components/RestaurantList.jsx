import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css'
import {
  LinkIcon,
} from '@heroicons/react/20/solid'


const RestaurantList = () => {
    const [restaurants , setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurants')
        .then(response => {
          setRestaurants(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the restaurants!', error);
        }); 
    },[]);
    
       return (
        <div className="wapper">
  
          <h1 className="header">
              Restaurants
          </h1>
            {restaurants.map(restaurant => (
              <div key = {restaurant._id}className="lg:flex lg:items-center lg:justify-between m-4">
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {restaurant.name}
                  </h2>
                  
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0">

                  <span className="ml-3 hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <Link to={`/restaurant/${restaurant._id}`} className="text-black-600">View Details</Link>
                    </button>
                  </span>

                  
                </div>
              </div>
            ))}

        <Link to={`/create`} className="ml-4">
            <div className="delete">
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New Restaurant
              </button>
            </div>         
        </Link>
        </div>

            

      );
}

export default RestaurantList
