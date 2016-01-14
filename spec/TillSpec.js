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
});
