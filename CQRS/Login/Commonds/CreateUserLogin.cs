using Expense_Tracker.CQRS.Login.Dtos;
using MediatR;

namespace Expense_Tracker.CQRS.Login.Commonds
{
    public record CreateUserLogin(string Email, string Password): IRequest<LoginDto>;
}
