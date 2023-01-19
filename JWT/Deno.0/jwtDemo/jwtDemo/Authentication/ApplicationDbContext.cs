using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers.Authentication
{
    public class ApplicationDbContext:IdentityDbContext
    {
        
    
        public ApplicationDbContext(DbContextOptions option) : base(option)
        {


        }
    
}
}
