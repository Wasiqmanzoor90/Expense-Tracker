using FluentValidation;

namespace Expense_Tracker.User.Commonds
{
    public class CreateUserValidator : AbstractValidator<CreateUserCommond>
    {

        public CreateUserValidator() 
        {

            RuleFor(x => x.Name)
                    .NotEmpty().WithMessage("Name is required.")
                    .MaximumLength(100);

            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email is required.")
                .EmailAddress().WithMessage("Invalid email format.");

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage("Password is required.")
                .MinimumLength(6).WithMessage("Password must be at least 6 characters.");


        }
    }
}
