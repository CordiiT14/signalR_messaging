namespace OrderUp.Models
{
    public class Table
    {
        public int TableNumber { get; set; }
        public int Covers { get; set; }
        public bool IsWalkIn { get; set; }
        public bool ForDrinksOnly { get; set; }

        public string SeatedTime { get; } = DateTime.Now.ToString("HH:mm:ss");
    }
}
