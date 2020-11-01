using app_home_api.Dto;
using app_home_api.Models;
using app_home_api.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Repository.Implementation
{
    public class BPFCRepository : RepositoryBase<BPFC>, IBPFCRepository
    {
        private readonly DataContext _context;
        public BPFCRepository(DataContext context) : base(context)
        {
            _context = context;
        }
    }
}
