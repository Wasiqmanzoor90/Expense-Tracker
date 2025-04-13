using Expense_Tracker.User.Commonds;
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
    }
}
