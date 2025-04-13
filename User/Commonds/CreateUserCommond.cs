using MediatR;

namespace Expense_Tracker.User.Commonds
{
    public record CreateUserCommond(string Name, string Email, string Password ) :IRequest<Guid>;
}
