# signalR_messaging

To test signalR in postman you need '' this character at the end of the message for it to work.
To get Icon open up windows menu and press ALT + 0030

To test different messages in postman:

To set Protocol:
{ "protocol": "json", "version":1 }

Different type of messages:
{
    "target": "SendTableNotification",
    "arguments" : [{"tableNumber": 2, "numberCovers": 5, "isBooking": false, "forDrinksOnly": true}],
    "type":1
}

{
    "target": "SendDrinkOrder",
    "arguments" : [{"tableNumber": 2, "items": ["water", "beer", "soda"]}],
    "type":1
}

{
    "target": "SendFoodOrder",
    "arguments" : [{"tableNumber": 2, "items": ["bread and cheese board", "side salad", "chips"]}],
    "type":1
}