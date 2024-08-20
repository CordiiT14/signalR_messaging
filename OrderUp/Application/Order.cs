namespace OrderUp.Models
{
    public class Order
    {
        public int TableNumber { get; set; }
        public List<string> Items { get; set; }
        public string OrderTime { get; } = DateTime.Now.ToString("HH:mm:ss");
    }
}
