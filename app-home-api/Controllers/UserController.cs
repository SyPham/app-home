using app_home_api.Dto;
using app_home_api.Models;
using app_home_api.Repository.Interface;
using AutoMapper;
using AutoMapper.QueryableExtensions;
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
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repoUser;
        private readonly IMapper _mapper;
        private readonly MapperConfiguration _configMapper;
        public UserController(IUserRepository repoUser, IMapper mapper, MapperConfiguration configMapper)
        {
            _repoUser = repoUser;
            _configMapper = configMapper;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _repoUser.FindAll().ProjectTo<UserDto>(_configMapper).ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserForCreateDto create)
        {
            var model = _mapper.Map<UserForCreateDto, User>(create);
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(create.Password, out passwordHash, out passwordSalt);
            model.PasswordHash = passwordHash;
            model.PasswordSalt = passwordSalt;
            if (_repoUser.FindAll().FirstOrDefault(x => x.Username == create.Username) != null)
                return BadRequest();
            try
            {
                _repoUser.Add(model);
                await _repoUser.SaveAll();
                return NoContent();
            }
            catch
            {

                return BadRequest();
            }
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(UserForCreateDto update)
        {
            var model = _mapper.Map<UserForCreateDto, User>(update);
            byte[] passwordHash, passwordSalt;
            if (update.Password != string.Empty || update.Password != null)
            {
                CreatePasswordHash(update.Password, out passwordHash, out passwordSalt);
                model.PasswordHash = passwordHash;
                model.PasswordSalt = passwordSalt;
            }

            if (_repoUser.FindAll().FirstOrDefault(x => x.Username == update.Username) == null)
                return BadRequest();
            try
            {
                _repoUser.Update(model);
                await _repoUser.SaveAll();
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
            if (_repoUser.FindById(Id) == null)
                return BadRequest();
            try
            {
                _repoUser.Remove(_repoUser.FindById(Id));
                await _repoUser.SaveAll();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
