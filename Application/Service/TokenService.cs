using Expense_Tracker.Application.Interface;
using Expense_Tracker.Domain.Model;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Expense_Tracker.Application.Service
{
    public class TokenService : IJToken
    {
private readonly IConfiguration _config;
        public TokenService(IConfiguration config)
        {
            _config = config;
        }

        public string GenrateToken(UserDetails user)
        {
            var claims = new[]
            {
                  new Claim(JwtRegisteredClaimNames.Sub, user.Email), // Sub claim is typically the email or username
        new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()), // Convert Guid to string
        new Claim(ClaimTypes.Email, user.Email) // Assuming user.Email is already a string
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
