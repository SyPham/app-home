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
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class RoleController : ControllerBase
    {
        private readonly IRoleRepository _repoRole;
        public RoleController(IRoleRepository repoRole)
        {
            _repoRole = repoRole;
        }



        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var roles = await _repoRole.FindAll().ToListAsync();
            return Ok(roles);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Role create)
        {

            if (_repoRole.FindById(create.Id) != null)
                return BadRequest();
            try
            {
                 _repoRole.Add(create);
                await _repoRole.SaveAll();
                return NoContent();
            }
            catch
            {

               return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Role update)
        {
            if (_repoRole.FindById(update.Id) == null)
                return BadRequest();
            try
            {
                _repoRole.Update(update);
                await _repoRole.SaveAll();
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
            if (_repoRole.FindById(Id) == null)
                return BadRequest();
            try
            {
                _repoRole.Remove(_repoRole.FindById(Id));
                await _repoRole.SaveAll();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
