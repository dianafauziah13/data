const axios = require('axios');

const base_url = 'http://localhost:8084/restaurants';

const createRestaurant = (restaurant) => axios.post(base_url, restaurant);
const getRestaurantById = (id) => axios.get(base_url + `/${id}`);

module.exports = {
    createRestaurant,
    getRestaurantById
}