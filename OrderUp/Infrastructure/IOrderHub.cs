using OrderUp.Models;

namespace OrderUp.Infrastructure
{
    public interface IOrderHub
    {
        Task NewTableNotification(Table newTable);

        Task NewFoodOrderNotification(Order order);

        Task NewDrinksOrderNotification(Order order);
    }
}
