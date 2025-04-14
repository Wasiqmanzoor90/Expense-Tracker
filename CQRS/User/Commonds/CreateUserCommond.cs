using MediatR;

namespace Expense_Tracker.CQRS.User.Commonds
{
    public record CreateUserCommond(string Name, string Email, string Password) : IRequest<Guid>;
}
