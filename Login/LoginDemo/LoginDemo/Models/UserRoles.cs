using System.ComponentModel.DataAnnotations;

namespace LoginDemo.Models
{
    public class UserRoles
    {
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}