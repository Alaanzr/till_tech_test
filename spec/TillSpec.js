describe("Till", function() {
  var till;
  var hipsterJson;

  beforeEach(function() {
    hipsterJson = [
      {
        "shopName": "The Coffee Connection",
        "address": "123 Lakeside Way",
        "phone": "16503600708",
        "prices": [
          {
            "Cafe Latte": 4.75,
            "Flat White": 4.75,
            "Cappucino": 3.85,
            "Single Espresso": 2.05,
            "Double Espresso": 3.75,
            "Americano": 3.75,
            "Cortado": 4.55,
            "Tea": 3.65,
            "Choc Mudcake": 6.40,
            "Choc Mousse": 8.20,
            "Affogato": 14.80,
            "Tiramisu": 11.40,
            "Blueberry Muffin": 4.05,
            "Chocolate Chip Muffin": 4.05,
            "Muffin Of The Day": 4.55
          }
        ]
      }
    ];
    till = new Till(hipsterJson);
  });

  it("Should be defined", function() {
    expect(till).toBeDefined();
  });

  it("Should reference the shop's address", function() {
    expect(till.address).toEqual("123 Lakeside Way");
  });

  it("Should reference the shop's name", function() {
    expect(till.shopName).toEqual("The Coffee Connection");
  });

  it("Should reference the shop's phone number", function() {
    expect(till.phone).toEqual("16503600708");
  });

  it("Should return a price for menu items", function() {
    expect(till.prices[0].Tiramisu).toEqual(11.40);
  });

  it("Should return a price for menu items containing multiple words", function() {
    expect(till.prices[0]['Cafe Latte']).toEqual(4.75);
  });

  it("Should initialise with no orders", function() {
    expect(till.orders.length).toEqual(0);
  });

    describe("addItem", function() {
      it("Should allow the till operator to add an item to the list of orders", function() {
        till.addItem('Tiramisu');
        expect(till.orders.length).toEqual(1);
      });

      it("Should raise an error when the till operator attempts to add an item not featured on the menu", function() {
        expect(function() {
          till.addItem('Invalid Item');
        }).toThrow(new Error("Invalid Menu Item"));
      });
    });
});
