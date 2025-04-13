using Expense_Tracker.Data;
using Expense_Tracker.Domain.Model;
using Expense_Tracker.User.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Expense_Tracker.User.Queries
{
    public class GetUserByIdQueryHandler : IRequestHandler<GetUserByIdQuery, UserDto>
    {
        private readonly SqlDbcontext _dbContext;

        public GetUserByIdQueryHandler(SqlDbcontext dbcontext)
        {
            _dbContext = dbcontext;
        }

        public async Task<UserDto> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.UserId == request.UserId, cancellationToken);
            if (user == null)
                throw new Exception("User not found.");

            return new UserDto
            {
                UserId = user.UserId,
                Name = user.Name,
                Email = user.Email
            };
        }
    }
}
