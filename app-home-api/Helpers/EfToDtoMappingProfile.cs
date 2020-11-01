using app_home_api.Dto;
using app_home_api.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Helpers
{
    public class EfToDtoMappingProfile : Profile
    {
        public EfToDtoMappingProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<User, UserForLoginDto>();
            CreateMap<User, UserForDetailDto>();
        }
    }
}
