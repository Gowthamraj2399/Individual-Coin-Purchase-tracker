(function (root, factory) {
  root["analytics"] = factory();
})(window, function () {
  var Analytics = function (portfolio) {
    this.getAnalyticsById = function (id, currentCoinPrice) {
      if (!portfolio) {
        return "Please pass the portfolio to the class";
      }
      if (typeof id !== "number") {
        return "Please enter a valid id.";
      }
      if (typeof currentCoinPrice !== "number") {
        return "Please enter valid price";
      }
      var purchaseDetails = portfolio.getPurchase(id);
      if (typeof purchaseDetails === "string") {
        return purchaseDetails;
      } else {
        var difference =
          (100 * (currentCoinPrice - purchaseDetails.buyprice)) /
          purchaseDetails.buyprice;
        var profiOrLoss = Math.sign(difference);
        switch (profiOrLoss) {
          case -1:
            return `Your purchase of ${purchaseDetails.quantity} coins on date ${purchaseDetails.date} has loss of ${difference}%`;
          case 1:
            return `Your purchase of ${purchaseDetails.quantity} coins on date ${purchaseDetails.date} has profit of ${difference}%`;
          case 0:
            return `Your purchase of ${purchaseDetails.quantity} coins on date ${purchaseDetails.date} has no profit or loss`;
        }
      }
    };
  };

  var init = function (portfolio) {
    return new Analytics(portfolio);
  };

  return init;
});
