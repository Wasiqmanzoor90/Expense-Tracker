﻿namespace Expense_Tracker.CQRS.Login.Dtos
{
    public class LoginDto
    {
        public Guid UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Token { get; set; } = string.Empty;  // Add Token property
    }
}
