using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_home_api.Dto
{
    public class BPFCForCreateDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int UserId { get; set; }
    }
}
