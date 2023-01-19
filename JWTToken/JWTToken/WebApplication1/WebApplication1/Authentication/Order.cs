using System.ComponentModel.DataAnnotations;
using WebApplication1.Authentication;

namespace JWTAuthenticationWithSwagger.Authentication
{
    public class Order
    {
        public long OrderID { get; set; }
        public string OrderNo { get; set; }
        public Nullable<int> CustomerID { get; set; }
        public string PMethod { get; set; }
        public Nullable<decimal> GTotal { get; set; }


   //     [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
   //     public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}

