using Expense_Tracker.Data;
using Expense_Tracker.Domain.Model;
using MediatR;

namespace Expense_Tracker.CQRS.Expenses.Commonds
{
    public class ExpensesCommondHandler : IRequestHandler<ExpensesCommond, Guid>
    {
        private readonly SqlDbcontext _dbContext;

        public ExpensesCommondHandler(SqlDbcontext dbcontext)
        {
            _dbContext = dbcontext;
        }

        public async Task<Guid> Handle(ExpensesCommond request, CancellationToken cancellationToken)
        {
            var detail = new Detail
            {
                DetailId = Guid.NewGuid(),
                UserId = request.UserId,
                Tittle = request.Tittle,
                Amount = request.Amount,
                Category = request.Category,
                DateTime = request.DateTime,
                Notes = request.Notes,
            };
            await _dbContext.Details.AddAsync(detail);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return detail.DetailId;
        }
    }

}
