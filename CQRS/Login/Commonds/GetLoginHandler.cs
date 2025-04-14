using Expense_Tracker.Application.Interface;
using Expense_Tracker.Application.Service;
using Expense_Tracker.CQRS.Login.Dtos;
using Expense_Tracker.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Expense_Tracker.CQRS.Login.Commonds
{
    public class GetLoginHandler : IRequestHandler<GetLogin, LoginDto>
    {
        private SqlDbcontext _dbcontext;
        private readonly IJToken _tokenService; // Inject the IJToken interface
        public GetLoginHandler(SqlDbcontext dbcontext, IJToken tokenService)
        {
            _dbcontext = dbcontext;
            _tokenService = tokenService; // Initialize the TokenService
        }
        public async Task<LoginDto> Handle(GetLogin request, CancellationToken cancellationToken)
        {
          var finduser = await _dbcontext.Users.FirstOrDefaultAsync(u=> u.Email == request.Email);
            if(finduser == null)
            {
                throw new ArgumentException("User Doesnt Exist!");
            }
            bool verify = BCrypt.Net.BCrypt.Verify(request.Password , finduser.Password);
            if(!verify)
            {
                throw new ArgumentException("Invalid password");
            }

            // Generate JWT token
            var token = _tokenService.GenrateToken(finduser);

            // Return the LoginDto with token
            return new LoginDto
            {
                Token = token,
                UserId = finduser.UserId,
                Email = finduser.Email,
                Name = finduser.Name  // Assuming there's a Name property in your User model
            };
        }
    }
}
