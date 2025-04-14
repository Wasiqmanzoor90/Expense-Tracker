using Expense_Tracker.Expenses.Query;
using FluentValidation;

namespace Expense_Tracker.CQRS.Expenses.Query
{
    public class GetExpenseValidator : AbstractValidator<GetExpensesId>
    {
        public GetExpenseValidator()
        {
            RuleFor(u => u.Userid).NotEmpty().WithMessage("UserId must not be empty.");
        }
    }
}
