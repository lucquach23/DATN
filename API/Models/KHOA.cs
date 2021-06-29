using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Khoa
    {
        public Khoa()
        {
            Nganhdaotaos = new HashSet<Nganhdaotao>();
        }

        public string MaKhoa { get; set; }
        public string TenKhoa { get; set; }
        public int? NamThanhLap { get; set; }
        public string MoTa { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual ICollection<Nganhdaotao> Nganhdaotaos { get; set; }
    }
}
