using MediatR;

namespace Expense_Tracker.CQRS.Expenses.Commonds
{
    public record ExpensesCommond(Guid UserId, string Tittle, decimal Amount, string? Category, DateTime DateTime, string? Notes) : IRequest<Guid>;
}
