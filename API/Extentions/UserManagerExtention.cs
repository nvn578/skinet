using Core.Entities.Identity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Extentions
{
    public static class UserManagerExtention
    {
        public static async Task<AppUser> FindUserByClaimsPrincipleWithAddress(Microsoft.AspNetCore.Identity.UserManager<AppUser> userManager, ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await userManager.Users.Include(x => x.Address).SingleOrDefaultAsync(x => x.Email == email);
        }
    }



    //public static async Task<AppUser> FindByEmailFromClaimsPrincipal(Microsoft.AspNetCore.Identity.UserManager<AppUser> userManager, ClaimsPrincipal user)
    //{
    //    return await userManager.Users.SingleOrDefaultAsync(x => x.Email == user.FindFirstValue(ClaimTypes.Email));

    //}
}
