namespace RestApi.Model
{
    public class Order
    {
        public long OrderID { get; set; }
        public string OrderNo { get; set; }
        public int CustomerID { get; set; }
        public decimal GTotal { get; set; }
    }
}
