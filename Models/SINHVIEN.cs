using System;
using System.Collections.Generic;

namespace Models
{
    public partial class SINHVIEN
    {
        //public SINHVIEN()
        //{
        //    DANGKIs = new HashSet<DANGKI>();
        //}

        public string MaSinhVien { get; set; }
        public string TenSinhVien { get; set; }
        public DateTime? SinhNhat { get; set; }
        public string QueQuan { get; set; }
        public bool? GioiTinh { get; set; }
        public string Email { get; set; }
        public string SoDienThoai { get; set; }
        public string MaLop { get; set; }
        public string Password { get; set; }
        public string AnhDaiDien { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModififedBy { get; set; }
        public int TongSoMon { get; set; }
        public int SoLuongMonTuChonBoTro { get; set; }
        public int SoLuongMonTuChonChuyenNganh { get; set; }
        public int SoLuongMonTuChonGDTC { get; set; }
        public int SoLuongMonBatBuoc { get; set; }
        public int? TSTC { get; set; }
        public int HocKiDangKi { get; set; }
        public float? DiemTongKet { get; set; }

        public string TenNganhDaoTao { get; set; }
        public int NamNhapHoc { get; set; }
        public int NamTotNghiep { get; set; }
        public int TongSoTinChi { get; set; }
        public string SDT { get; set; }
        public string  GVCN { get; set; }

        //public virtual LOP MaLopNavigation { get; set; }
        //public virtual ICollection<DANGKI> DANGKIs { get; set; }
    }
}
