(function (root, factory) {
  root["portfolio"] = factory();
})(window, function () {
  var Portfolio = function () {
    var WALLET = {
      purchase: [],
      total: 0,
    };
    this.addPurchase = function (quantity, buyprice, date) {
      if (typeof quantity !== "number") {
        return "Please enter the valid quantity";
      }
      if (typeof buyprice !== "number") {
        return "Please enter the valid buyprice";
      }
      if (typeof date !== "string") {
        return "Please enter the date";
      }

      var newPurchase = {
        id: WALLET.purchase.length + 1,
        quantity: quantity,
        buyprice: buyprice,
        date: date,
      };

      WALLET.purchase.push(newPurchase);
      WALLET.total += quantity * buyprice;

      return `Your purchase of ${quantity} coins at ${buyprice} rupees has been added. Your purchase id is ${
        WALLET.purchase.length + 1
      }`;
    };

    this.getPurchase = function (id) {
      var purchaseIndex = null;
      if (typeof id !== "number") {
        return "Please enter a valid id";
      }

      for (var i = 0; i < WALLET.purchase.length; i++) {
        if (WALLET.purchase[i].id === id) {
          purchaseIndex = i;
        }
      }
      if (purchaseIndex !== null) {
        return WALLET.purchase[purchaseIndex];
      } else {
        return "Invalid purchase id";
      }
    };

    this.getWallet = function () {
      return WALLET;
    };
  };

  var init = function () {
    return new Portfolio();
  };

  return init;
});
