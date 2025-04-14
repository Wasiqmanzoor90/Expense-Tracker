using Expense_Tracker.CQRS.Expenses.Dtos;

using MediatR;

namespace Expense_Tracker.Expenses.Query
{
   public record GetExpensesId(Guid Userid): IRequest<List<DetailDto>>;
}
