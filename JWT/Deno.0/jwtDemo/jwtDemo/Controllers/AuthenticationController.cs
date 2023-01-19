using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Authentication;
using WebApplication1.Controllers.Authentication;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
    {
       
        public IActionResult Index()
        {
            return View();
        }
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<ApplicationUser> roleManager;
        private readonly IConfiguration configuration;

        public AuthenticationController(UserManager<ApplicationUser> userManager, RoleManager<ApplicationUser> roleManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.configuration = configuration;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExist = await userManager.FindByNameAsync(model.UserName);
            if(userExist != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Responce { Status = "Error", Message = "User Allready Exist" });
            }
            else
            {
                ApplicationUser user = new ApplicationUser()
                {
                    Email = model.Email,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = model.UserName,
                };
                var result = await userManager.CreateAsync(user, model.Password);
                if (!result.Succeeded)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Responce { Status = "Error", Message = "User Creation Failed" });
                }
                return Ok(new Responce { Status = "Success", Message = "User Created Successfully" });
            }
           
        }
    }
}
