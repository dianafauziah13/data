const {menuItems} = require("./menuItems");

const restaurant = {
  address: {
    city: "Bandung",
    state: "Jawa Barat",
    street1: "Jalan Soekarno Hatta Nomor 14",
    street2: "Outlet Bandung Nomor 12",
    zip: "40618",
  },
  menu: {
    menuItems: menuItems
  },
  name: "Pizza Bageur",
};

module.exports = {
    restaurant
}