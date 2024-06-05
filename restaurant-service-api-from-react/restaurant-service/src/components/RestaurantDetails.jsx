import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import './style.css'

const RestaurantDetails = () => {
    const { id } = useParams();
    const [ restaurant , setRestaurant] =useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/restaurants/${id}`)
        .then(response =>{
            setRestaurant(response.data);
        })
        .catch(error =>{
            console.error('There was an error fetching the restaurant!', error)
        });
    },[id]);
  return (
    <div>
        <div className='wapper'>
            <div className="details">
            <h1 className="restaurantName">Name- {restaurant.name}</h1>
            <p className='address'>Address- {restaurant.address}</p>
            <p className='telephone'>Telephone Number-  +94{restaurant.telephone}</p>
            </div>
        
        <div className="changes">
        <Link to={`/update/${restaurant._id}`} className="ml-4">
                <div className="update">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded flex items-center">
                        <FaEdit className="mr-2" /> {/* Icon with some margin */}
                        Edit
                    </button>
                </div>         
        </Link>
        <Link to={`/delete/${restaurant._id}`} className="ml-4">
            <div className="delete">
                    <button className="bg-red-500 text-white py-1 px-3 rounded flex items-center">
                        <FaEdit className="mr-2" /> {/* Icon with some margin */}
                        Delete
                    </button>
            </div>         
        </Link>
        </div>
        
        </div>
    </div>
  )
}

export default RestaurantDetails
