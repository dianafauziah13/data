const axios = require("axios");
const orderService = require("./services/orderService");
const restaurantService = require("./services/restaurantService");
const { restaurant } = require("./data/restaurant");
const { menuItems } = require("./data/menuItems");

// One time only
const createRestaurant = () => {
  return restaurantService.createRestaurant(restaurant);
};

const generateOrderLineItems = () => {
    const items = [];
    const arrayLen = menuItems.length;

    for (let i = 0; i < 10; i++) {
        const randIndex = Math.floor(Math.random() * arrayLen - 1) + 1;
        const item = {
            menuItemId: "menu-" + 1,
            quantity: 10,
          }
        
        items.push(item);
    }

    return items;
}

const createOrder = () => {
  const arrayLen = menuItems.length;
  const randIndex = Math.floor(Math.random() * arrayLen);

  const order = {
    consumerId: 0,
    deliveryAddress: {
      city: "Bandung",
      state: "Jawa Barat",
      street1: "Jalan Kemangi nomor 12",
      street2: "Gang Anom nomor 10",
      zip: "40618",
    },
    deliveryTime: "2023-05-22T02:17:00.761Z",
    lineItems: generateOrderLineItems(),
    restaurantId: 2,
  };

  return orderService.createOrder(order);
};

const main = async () => {
  try {
    const response = await createOrder();
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

main();
