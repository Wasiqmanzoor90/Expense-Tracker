using Expense_Tracker.Data;
using Expense_Tracker.Domain.Model;
using MediatR;
using Microsoft.EntityFrameworkCore;


namespace Expense_Tracker.User.Commonds
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommond, Guid>
    {
        private readonly SqlDbcontext _dbContext;

    public CreateUserCommandHandler(SqlDbcontext dbContext)
        {

            _dbContext = dbContext;
        }
        public async Task<Guid> Handle(CreateUserCommond request, CancellationToken cancellationToken)
        {
            var emaild = await _dbContext.Users.AnyAsync(e => e.Email == request.Email, cancellationToken);
            if(emaild)
            {
                throw new Exception("Email already exists.");
            }

            var hash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            var user = new UserDetails
            {
                UserId = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Password = hash
            };
            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return user.UserId;

        }
    }
}
