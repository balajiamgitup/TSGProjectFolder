using LoginDemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Text;

namespace LoginDemo.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public async Task<ActionResult> LoginUser(UserRoles user)
        {
            using (var httpClient = new HttpClient())
            {
                StringContent conten = new StringContent(JsonConvert.SerializeObject(user), Encoding.UTF8, "application/json");
                using (var responce = await httpClient.PostAsync("http://localhost:5073/api/Authenticate/login", conten))
                {
                    string token = await responce.Content.ReadAsStringAsync();
                    HttpContext.Session.SetString("JWToken", token);

                }
                return Redirect("~/Dashboard/Index");
            }
        }

        public IActionResult Logoff()
        {
            HttpContext.Session.Clear();//clear token
            return Redirect("~/Home/Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


     

        public IActionResult CreateUser()
        {
            return View();

        }
    }
}