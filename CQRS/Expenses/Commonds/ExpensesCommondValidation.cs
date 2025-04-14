using FluentValidation;

namespace Expense_Tracker.CQRS.Expenses.Commonds
{
    public class ExpensesCommondValidation : AbstractValidator<ExpensesCommond>
    {
        public ExpensesCommondValidation()
        {


            RuleFor(d => d.Tittle)
                        .NotEmpty().WithMessage("Tittle is requires")
                        .MaximumLength(100).WithMessage("Title cannot exceed 100 characters.");

            RuleFor(d => d.Amount)
                .GreaterThan(0).WithMessage("Amount should be greater than 0");

            RuleFor(d => d.Category)
                .MaximumLength(50).WithMessage("Category can't exceed 50 characters.")
                .When(d => !string.IsNullOrWhiteSpace(d.Category));

            RuleFor(d => d.DateTime)
                .LessThanOrEqualTo(DateTime.UtcNow).WithMessage("Date cannot be in the future.");

            RuleFor(d => d.Notes)
         .MaximumLength(500).WithMessage("Notes cannot exceed 500 characters.");






        }
    }
}
