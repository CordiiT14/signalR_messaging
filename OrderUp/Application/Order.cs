namespace OrderUp.Models
{
    public class Order
    {
        public int TableNumber { get; set; }
        public List<string> Items { get; set; }
    }
}
