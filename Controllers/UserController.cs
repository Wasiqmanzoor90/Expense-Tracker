using Expense_Tracker.CQRS.Expenses.Commonds;
using Expense_Tracker.CQRS.Expenses.Query;
using Expense_Tracker.CQRS.User.Commonds;
using Expense_Tracker.Expenses.Query;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Expense_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;
       public UserController(IMediator mediator)
        {
           _mediator = mediator;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] CreateUserCommond commond)
        {
            var userId = await _mediator.Send(commond);
                 return Ok(new { UserId = userId, Message = "User registered successfully." });
        }


        [HttpGet("{UserId}")]
        public async Task<IActionResult>GetExpen(Guid UserId)
        {
            var result= await _mediator.Send(new GetExpensesId(UserId));
            return Ok(result);
        }



        [HttpPost("Expenses")]
        public async Task<IActionResult> Expenses(ExpensesCommond commond)
        {
            var userid = await _mediator.Send(commond);
            return Ok(new {message = "Ok" });
        }
    }
}
