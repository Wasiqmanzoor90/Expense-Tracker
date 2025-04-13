using Expense_Tracker.Domain.Model;
using Microsoft.EntityFrameworkCore;



namespace Expense_Tracker.Data;

    public class SqlDbcontext :DbContext
    {
    public SqlDbcontext(DbContextOptions<SqlDbcontext> options) : base(options)
        {

        }
    public DbSet<UserDetails> Users { get; set; }
    public DbSet<Detail> Details {  get; set; }

}

