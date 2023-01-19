using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestApi.Model
{
    public class Item
    {
        [Key]
       
        public Guid ItemID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
    }
}
