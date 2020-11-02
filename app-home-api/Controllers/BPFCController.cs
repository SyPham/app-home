using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using app_home_api.Dto;
using app_home_api.Models;
using app_home_api.Repository.Interface;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace app_home_api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BPFCController : ControllerBase
    {
        private readonly ILogger<BPFCController> _logger;
        private readonly IBPFCRepository _repoBPFC;
        private readonly IMapper _mapper;
        private readonly MapperConfiguration _configMapper;

        public BPFCController(ILogger<BPFCController> logger,
            IBPFCRepository repoBPFC,
            IMapper mapper, MapperConfiguration configMapper)
        {
            _logger = logger;
            _repoBPFC = repoBPFC;
            _configMapper = configMapper;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var BPFCs = await _repoBPFC.FindAll().Include(x=>x.Category).Include(x=>x.User).ProjectTo<BPFCDto>(_configMapper).ToListAsync();
            return Ok(BPFCs);
        }

        [HttpPost]
        public async Task<IActionResult> Create(BPFCForCreateDto create)
        {
            var model = _mapper.Map<BPFCForCreateDto, BPFC>(create);
            if (_repoBPFC.FindById(create.Id) != null)
                return BadRequest();
            try
            {
                _repoBPFC.Add(model);
                await _repoBPFC.SaveAll();
                return NoContent();
            }
            catch
            {

                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(BPFCForCreateDto update)
        {
            var model = _mapper.Map<BPFCForCreateDto, BPFC>(update);
            if (_repoBPFC.FindById(update.Id) == null)
                return BadRequest();
            try
            {
                _repoBPFC.Update(model);
                await _repoBPFC.SaveAll();
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
            if (_repoBPFC.FindById(Id) == null)
                return BadRequest();
            try
            {
                _repoBPFC.Remove(_repoBPFC.FindById(Id));
                await _repoBPFC.SaveAll();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
