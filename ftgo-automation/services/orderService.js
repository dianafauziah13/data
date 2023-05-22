const axios = require('axios');

const createOrder = (order) => axios.post('http://localhost:8082/orders', order);

module.exports = {
    createOrder
}