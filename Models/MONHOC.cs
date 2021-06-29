using System;
using System.Collections.Generic;

namespace Models
{
    public partial class MONHOC
    {
        //public MONHOC()
        //{
        //    CTDTMONHOCs = new HashSet<CTDTMONHOC>();
        //    LOPMONHOCs = new HashSet<LOPMONHOC>();
        //}
        public string MaMonHoc { get; set; }
        public string TenMonHoc { get; set; }
        public int? SoTinChi { get; set; }
        public int? SoTinChiLiThuyet { get; set; }
        public int? SoTinChiThucHanh { get; set; }
        public string KhaiQuatChung { get; set; }
        public string NhomTuChon { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
        public float DiemTongKet { get; set; }
        public string  MaLopMonHoc { get; set; }
        public string Link { get; set; }
        public string TenGiangVien { get; set; }
        public int HocKi { get; set; }
        public int SoLuongSVDangKi { get; set; }
        public string MaGiangVien { get; set; }
        public string  TenKhoa { get; set; }
        public string MaMonHocTienQuyet { get; set; }
        public string TenMonHocTienQuyet { get; set; }

        //public virtual ICollection<CTDTMONHOC> CTDTMONHOCs { get; set; }
        //public virtual ICollection<LOPMONHOC> LOPMONHOCs { get; set; }
    }
}
