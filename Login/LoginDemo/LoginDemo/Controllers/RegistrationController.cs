using LoginDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoginDemo.Controllers
{
    public class RegistrationController : Controller
    {
        HttpClientHandler _clientHandler=new HttpClientHandler();

        string baseUrl = "http://localhost:5073/api/Authenticate/register";

        public RegistrationController()
        {

            _clientHandler.ServerCertificateCustomValidationCallback = (sender, Cert, Chain, SslPolicyErrors) => { return true; };
        }
        public IActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult<String>> CreateUser(UserRegistration user)
        {
            UserRegistration obj = new UserRegistration()
            {
                UserName = user.UserName,
                Email = user.Email,
                Password = user.Password,
            };
            if (user.UserName != null)
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(baseUrl + "register/");
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage getData = await client.PostAsJsonAsync<UserRegistration>("CreateUser", obj);

                    if (getData.IsSuccessStatusCode)
                    {
                        return RedirectToAction("Index", "Home");
                    }
                    else
                    {
                        Console.WriteLine("Error calling web api");
                    }

                }
            }
            return View();

        }

    }
}
