function Till(json) {
  this.shopName = json[0].shopName;
  this.address = json[0].address;
  this.phone = json[0].phone;
  this.prices = json[0].prices;
  this.orders = [];
  this.sum = 0;
  var that = this;

  this.addItem = function(menuItem, quantity) {
    if (!json[0].prices[0].hasOwnProperty(menuItem)) throw Error("Invalid Menu Item");
    var obj = {};
    obj[menuItem] = quantity * this.prices[0][menuItem];
    this.orders.push(obj);
  };

  this.total = function() {
    this.orders.forEach(function(order) {
      for(var key in order) {
        that.sum += order[key];
      }
    });
  };

}
