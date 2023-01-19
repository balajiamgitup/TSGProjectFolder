using System.ComponentModel.DataAnnotations;
using WebApplication1.Authentication;

namespace JWTAuthenticationWithSwagger.Authentication
{
    public class Item
    {
        public int ItemID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }



       // [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
       // public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}

