using Expense_Tracker.CQRS.User.Dtos;
using Expense_Tracker.Domain.Model;
using MediatR;

namespace Expense_Tracker.CQRS.User.Queries
{
    public record GetUserByIdQuery(Guid UserId) : IRequest<UserDto>;
}
