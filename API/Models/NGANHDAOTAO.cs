using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Nganhdaotao
    {
        public Nganhdaotao()
        {
            Chuongtrinhdaotaos = new HashSet<Chuongtrinhdaotao>();
            Lops = new HashSet<Lop>();
        }

        public string MaNganhDaoTao { get; set; }
        public string TenNganhDaoTao { get; set; }
        public string MoTa { get; set; }
        public string MaKhoa { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual Khoa MaKhoaNavigation { get; set; }
        public virtual ICollection<Chuongtrinhdaotao> Chuongtrinhdaotaos { get; set; }
        public virtual ICollection<Lop> Lops { get; set; }
    }
}
