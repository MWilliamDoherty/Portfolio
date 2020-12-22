using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioExample.Services;
using PortfolioExample.Interfaces;
using PortfolioExample.Models;
using Microsoft.AspNetCore.Cors;

namespace PortfolioExample.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private ICompileRecipeService _service;

        public RecipeController()
        {
            _service = new CompileRecipeService();

            
        }

        [HttpGet]
        public List<Recipe> getRecipeNames()
        {
            List<Recipe> recipes = _service.getRecipes();
            return recipes;
        }
    }
}
