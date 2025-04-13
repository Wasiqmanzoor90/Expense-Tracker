using FluentValidation;

namespace Expense_Tracker.User.Queries
{
    public class GetUserByIdQueryValidator : AbstractValidator<GetUserByIdQuery>
    {
        public GetUserByIdQueryValidator() 
        {

            RuleFor(u => u.UserId)
                .NotEmpty().WithMessage("UserId must not be empty.");

        }
    }
}
