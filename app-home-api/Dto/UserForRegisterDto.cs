using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Dto
{
    public class UserForRegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public int roleId { get; set; }
    }
}
