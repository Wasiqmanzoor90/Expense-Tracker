namespace Expense_Tracker.CQRS.Expenses.Dtos
{
    public class DetailDto
    {
        public Guid DetailId { get; set; }
        public string Tittle { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string? Category { get; set; }
        public DateTime DateTime { get; set; }
        public string? Notes { get; set; }
    }
}
