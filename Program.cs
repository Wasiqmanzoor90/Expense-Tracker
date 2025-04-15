using Expense_Tracker.Application.Behaviors;
using Expense_Tracker.Application.Interface;
using Expense_Tracker.Application.Service;
using Expense_Tracker.Data;
using Expense_Tracker.Extensions;
using FluentValidation;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddFluentValidationAutoValidation(); // Auto model validation
builder.Services.AddFluentValidationClientsideAdapters(); // Optional: for client-side validation (if using Razor/Blazor)
builder.Services.AddScoped<IJToken, TokenService>();

builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());




builder.Services.AddDbContext<SqlDbcontext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase")));


//  Call your JWT extension here
builder.Services.AddJwtAuthentication(builder.Configuration);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



// Register MediatR (v12+ syntax)
builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly());
});

builder.Services.AddCors(Options =>
{
    Options.AddPolicy("AllowAll", policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();  // ?? Required for JWT


app.UseAuthorization();

app.MapControllers();

app.Run();
