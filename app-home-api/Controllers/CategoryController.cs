using app_home_api.Models;
using app_home_api.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [Authorize]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repoCategory;
        public CategoryController(ICategoryRepository repoCategory)
        {
            _repoCategory = repoCategory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var Categorys = await _repoCategory.FindAll().ToListAsync();
            return Ok(Categorys);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Category create)
        {

            if (_repoCategory.FindById(create.Id) != null)
                return BadRequest();
            try
            {
                 _repoCategory.Add(create);
                await _repoCategory.SaveAll();
                return NoContent();
            }
            catch
            {

               return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Category update)
        {
            if (_repoCategory.FindById(update.Id) == null)
                return BadRequest();
            try
            {
                _repoCategory.Update(update);
                await _repoCategory.SaveAll();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            if (_repoCategory.FindById(Id) == null)
                return BadRequest();
            try
            {
                _repoCategory.Remove(_repoCategory.FindById(Id));
                await _repoCategory.SaveAll();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
