using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AuthenticationApi6._0.DbContext
{
    public class AuthenticationDbContext :IdentityDbContext
    {
        public AuthenticationDbContext(DbContextOptions option) :base(option)
        {


        }
    }
}
