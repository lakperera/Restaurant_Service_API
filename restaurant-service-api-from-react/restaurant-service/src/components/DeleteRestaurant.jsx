import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

const DeleteRestaurant = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const confirmDeletion = window.confirm('Are you sure you want to delete this restaurant?');
    
        if (confirmDeletion) {
          axios.delete(`http://localhost:8080/api/restaurants/${id}`)
            .then(response => {
              alert('Restaurant deleted successfully');
              navigate('/');
            })
            .catch(error => {
              console.error('There was an error deleting the restaurant!', error);
              alert('Failed to delete the restaurant');
            });
        } else {
          navigate('/');
        }
      }, [id, navigate]);
      return(
        <div>
        <   p>Deleting restaurant...</p>
        </div>
      )
  
}

export default DeleteRestaurant
