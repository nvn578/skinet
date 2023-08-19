using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Nvn",
                    Email = "nvn@test.com",
                    UserName = "nvn@test.com",
                    Address = new Address
                    {
                        FirstName = "Nvn",
                        LastName = "bhatt",
                        Street = "5",
                        City = "New Delhi",
                        State = "Delhi",
                        ZipCode = "110044"
                    }
                };

                await userManager.CreateAsync(user,"ThereyouareNvn123@");
            }

        }
    }
}
