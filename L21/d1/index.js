class Order {
  constructor(price, city, type) {
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toFixed(2);
  }

  checkPrice(price) {
    if (this.price > 1000) {
      return true;
    } else {
      return false;
    }
  }

  confirmOrder() {
    return (this.isConfirmed = true);
  }

  isValidType(type) {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const Order1 = new Order(1500, 'Lviv', 'Buy');
console.log(Order1);
console.log(Order1.checkPrice());
console.log(Order1.isValidType());
console.log(Order1.confirmOrder());
