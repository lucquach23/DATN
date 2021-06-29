using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Chuongtrinhdaotao
    {
        public Chuongtrinhdaotao()
        {
            Ctdtmonhocs = new HashSet<Ctdtmonhoc>();
        }

        public string MaChuongTrinhDaoTao { get; set; }
        public string TenChuongTrinhDaoTao { get; set; }
        public int? TongSoTinChi { get; set; }
        public string HeDaoTao { get; set; }
        public string MoTa { get; set; }
        public string MaNganhDaoTao { get; set; }
        public string NguoiBanHanh { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual Nganhdaotao MaNganhDaoTaoNavigation { get; set; }
        public virtual ICollection<Ctdtmonhoc> Ctdtmonhocs { get; set; }
    }
}
