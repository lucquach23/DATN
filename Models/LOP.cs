using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class LOP
    {
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
        public string TenGiangVien { get; set; }
        public string Email { get; set; }
        public string SoDienThoai { get; set; }
    }
}
