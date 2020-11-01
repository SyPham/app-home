using app_home_api.Dto;
using app_home_api.Models;
using app_home_api.Repository.Interface;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Repository.Implementation
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly MapperConfiguration _configMapper;
        public AuthRepository(DataContext context, IMapper mapper, MapperConfiguration configMapper)
        {
            _context = context;
            _configMapper = configMapper;
            _mapper = mapper;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.Include(x=>x.Role).FirstOrDefaultAsync(x => x.Username == username);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
                return true;
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

        public async Task<UserForRegisterDto> Register(UserForRegisterDto userForRegister)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == userForRegister.Username);

            if (user != null)
                return null;
            try
            {
                var model = _mapper.Map<UserForRegisterDto, User>(userForRegister);
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(userForRegister.Password, out passwordHash, out passwordSalt);
                model.PasswordHash = passwordHash;
                model.PasswordSalt = passwordSalt;
                _context.Users.Add(model);
                await _context.SaveChangesAsync();
                return userForRegister;
            }
            catch
            {
                return null;
            }
        }
    }
}
