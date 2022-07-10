Individual purchase tracker

Problem: 

Consider you have a crypto wallet. You purchase cryto coins every month on same coins eg: ADA in different prices. 
You dont have money to buy a coin but your friend was interested to put some money on the coin ADA in your account.
You have to calculate the profit/loss of your coin as well as his coin.

Solution: 

Save crpto purchases as individual purchases. And get the profit/loss of individual purchase.

Modules: 

1) Purchase Modules.
    1) Create a new purchase.
    2) Get a specific purchase.

2) Analytics Module
    1) Get the profit\loss of the individual purchase.


App flow:
Step 1: Create a variable and call the portfolio class. 
            var myPortfolio = portfolio();
Step 2: Add a new purchase to your portfolio with quantity, buy price and date.
            portfolio.addaddPurchase(10, 50, '10-07-2022')
Step 3: Create a variable and call the Analytics class with your portfolio variable.
            var analytics = analytics(myPortfolio);
Step 4: You can get the profit of loss with the help of getAnalyticsById function passing the purchase id and current price of the coin.
            analytics.getAnalyticsById(1, 40)



