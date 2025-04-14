using Expense_Tracker.CQRS.Expenses.Dtos;
using Expense_Tracker.Data;
using Expense_Tracker.Expenses.Query;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Expense_Tracker.CQRS.Expenses.Query
{
    public class GetExpensesHandler : IRequestHandler<GetExpensesId, List<DetailDto>>
    {
        private readonly SqlDbcontext _dbContext;

        public GetExpensesHandler(SqlDbcontext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<DetailDto>> Handle(GetExpensesId request, CancellationToken cancellationToken)
        {
            var expenses = await _dbContext.Details
                .Where(d => d.UserId == request.Userid)
                .ToListAsync(cancellationToken);

            if (expenses == null || expenses.Count == 0)
                throw new Exception("No expenses found for this user.");

            return expenses.Select(d => new DetailDto
            {
                Tittle = d.Tittle,
                Amount = d.Amount,
                DateTime = d.DateTime,
                Notes = d.Notes,
                Category = d.Category
            }).ToList();
        }
    }
}
