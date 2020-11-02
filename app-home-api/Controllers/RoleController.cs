using app_home_api.Models;
using app_home_api.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using app_home_api.Dto;

namespace app_home_api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class RoleController : ControllerBase
    {
        private readonly IRoleRepository _repoRole;
        private readonly IMapper _mapper;
        private readonly MapperConfiguration _configMapper;
        public RoleController(IRoleRepository repoRole, IMapper mapper, MapperConfiguration configMapper)
        {
            _repoRole = repoRole;
            _configMapper = configMapper;
            _mapper = mapper;
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
        public async Task<IActionResult> Update(RoleDto update)
        {

            var item = _repoRole.FindById(update.Id);
            if (item == null)
                return BadRequest();
            try
            {
               var model = _mapper.Map<Role>(update);
                _repoRole.Update(model);
                await _repoRole.SaveAll();
                return NoContent();
            }
            catch (Exception ex)
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
