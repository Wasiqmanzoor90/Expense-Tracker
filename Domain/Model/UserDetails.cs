using System.ComponentModel.DataAnnotations;

namespace Expense_Tracker.Domain.Model
{
    public class UserDetails
    {
        [Key]
        public Guid UserId { get; set; }
        public required string Name { get; set; }
        [EmailAddress]
        public required string Email { get; set; }
        public required string Password { get; set; }
        public ICollection<Detail> Details { get; set; } = [];
    }
}
