using LoginDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace LoginDemo.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            var token = HttpContext.Session.GetString("JWToken");
            return View();
        }

      
    }
}
