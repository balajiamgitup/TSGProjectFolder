using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JWTAuthenticationWithSwagger.Authentication
{
    public class Item
    {
        public int ItemID { get; set; }
        public string Name { get; set; }
        public Nullable<decimal> Price { get; set; }

        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}