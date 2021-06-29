using System;
using System.Collections.Generic;

namespace Models
{
    public partial class LOPMONHOC
    {
        //public LOPMONHOC()
        //{
        //    DANGKIs = new HashSet<DANGKI>();
        //}

        public string MaLopMonHoc { get; set; }
        public string MaMonHoc { get; set; }
        public string MaGiangVien { get; set; }
        public int? MinSV { get; set; }
        public int? MaxSV { get; set; }
        public string PhongHoc { get; set; }
        public string ThoiGian { get; set; }
        public string TuanHoc { get; set; }
        public int? HocKi { get; set; }
        public DateTime? CretaedDate { get; set; }
        public DateTime? NgayDong { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
        public string TenGiangVien { get; set; }
        public string MaSinhVien { get; set; }
        public string TenSinhVien { get; set; }
        public string  Email { get; set; }
        public string  SoDienThoai { get; set; }
        public int? SoTinChi { get; set; }
        public string TenMonHoc { get; set; }
        public int? slsv { get; set; }
        public int? SoLuongSVDangKi { get; set; }
        public string NhomTuChon { get; set; }
        public string TrangThaiLop { get; set; }
        public bool ICheck { get; set; }
        // public string  TenMonHoc { get; set; }
        public System.Int64 RowNum { get; set; }
        public int SoTinChiLiThuyet { get; set; }
        public int SoTinChiThucHanh { get; set; }
        //public string TenMonHoc { get; set; }
        public double DiemTongKet  { get; set; }
       // public string TenSinhVien { get; set; }
        public string MaLop { get; set; }
        public DateTime?  SinhNhat { get; set; }


        //public virtual GIANGVIEN MaGiangVienNavigation { get; set; }
        //public virtual MONHOC MaMonHocNavigation { get; set; }
        //public virtual ICollection<DANGKI> DANGKIs { get; set; }
    }
}
