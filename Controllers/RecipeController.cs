using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioExample.Services;
using PortfolioExample.Interfaces;

namespace PortfolioExample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private ICompileRecipeService _service;

        public RecipeController()
        {
            _service = new CompileRecipeService();

            
        }
    }
}
