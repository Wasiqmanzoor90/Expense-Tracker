using Expense_Tracker.Domain.Model;
using Expense_Tracker.User.Dtos;
using MediatR;

namespace Expense_Tracker.User.Queries
{
 public record GetUserByIdQuery(Guid UserId) : IRequest<UserDto>;
}
