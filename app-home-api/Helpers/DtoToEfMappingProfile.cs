using app_home_api.Dto;
using app_home_api.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Helpers
{
    public class DtoToEfMappingProfile : Profile
    {
        public DtoToEfMappingProfile()
        {
            CreateMap<RoleDto, Role>();
            CreateMap<UserDto, User>();
            CreateMap<UserForCreateDto, User>();
            CreateMap<UserForLoginDto, User>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<BPFCDto, BPFC>();
            CreateMap<BPFCForCreateDto, BPFC>();
        }
    }
}
