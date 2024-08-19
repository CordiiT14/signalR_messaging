using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using OrderUp.Application;
using OrderUp.Infrastructure;
using OrderUp.Models;

namespace OrderUp.API
{
    [ApiController]
    [Route("orderUp")]
    public class OrderUpController : ControllerBase
    {
        private readonly IHubContext<OrderHub, IOrderHub> _orderUpHub;
        public OrderUpController(IHubContext<OrderHub, IOrderHub> orderHub)
        {
            _orderUpHub = orderHub;
        }

        [HttpPost]
        [Route("/table")]
        public async Task<IActionResult> NewTableAsync(Table table)
        {
            await _orderUpHub.Clients.All.NewTableNotification(table);

            return NoContent();
        }

        [HttpPost]
        [Route("/food")]
        public async Task<IActionResult> NewFoodOrderAsync(Order order)
        {
            await _orderUpHub.Clients.All.NewFoodOrderNotification(order);

            return NoContent();
        }

        [HttpPost]
        [Route("/drinks")]
        public async Task<IActionResult> NewDrinksOrderAsync(Order order)
        {
            await _orderUpHub.Clients.All.NewDrinksOrderNotification(order);

            return NoContent();
        }
    }
}
