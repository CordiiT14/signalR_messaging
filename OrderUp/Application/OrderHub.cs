using Microsoft.AspNetCore.SignalR;
using OrderUp.Infrastructure;
using OrderUp.Models;

namespace OrderUp.Application
{
    public sealed class OrderHub : Hub<IOrderHub>
    {
        public async Task SendTableNotification(Table newTable)
        {
            await Clients.All.NewTableNotification(newTable);
        }

        public async Task SendFoodOrder(Order order)
        {
            await Clients.All.NewFoodOrderNotification(order);
        }

        public async Task SendDrinkOrder(Order order)
        {
            await Clients.All.NewDrinksOrderNotification(order);
        }
    }
}
