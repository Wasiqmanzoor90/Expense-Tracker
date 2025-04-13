using System.ComponentModel.DataAnnotations.Schema;

namespace Expense_Tracker.Domain.Model
{
    public class Detail
    {
        public Guid DetailId { get; set; }
        public required string Tittle {  get; set; }
        public required Decimal Amount { get; set; }
        public string ? Category { get; set; }
        public DateTime DateTime { get; set; }
        public string ? Notes { get; set; }

        public Guid UserId { get; set; }
        [ForeignKey("UserId")]
        public UserDetails? user { get; set; }
    }
}
