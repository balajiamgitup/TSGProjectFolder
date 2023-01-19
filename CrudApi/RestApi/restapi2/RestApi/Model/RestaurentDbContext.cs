using Microsoft.EntityFrameworkCore;

namespace RestApi.Model
{
    public class RestaurentDbContext : DbContext
    {
        public RestaurentDbContext(DbContextOptions<RestaurentDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<Item> Item { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }

    }
}
