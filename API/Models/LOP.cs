using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Lop
    {
        public Lop()
        {
            Sinhviens = new HashSet<Sinhvien>();
        }

        public string MaLop { get; set; }
        public string TenLop { get; set; }
        public int? SiSo { get; set; }
        public int? NamNhapHoc { get; set; }
        public int? NamTotNghiep { get; set; }
        public string MaGiaoVienChuNhiem { get; set; }
        public string MaNganhDaoTao { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual Giangvien MaGiaoVienChuNhiemNavigation { get; set; }
        public virtual Nganhdaotao MaNganhDaoTaoNavigation { get; set; }
        public virtual ICollection<Sinhvien> Sinhviens { get; set; }
    }
}
