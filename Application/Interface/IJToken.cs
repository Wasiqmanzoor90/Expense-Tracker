using Expense_Tracker.Domain.Model;

namespace Expense_Tracker.Application.Interface
{
    public interface IJToken
    {
       string GenrateToken(UserDetails user);
    }
}
