using System;
using System.Collections.Generic;

namespace Models
{
    public partial class CHUONGTRINHDAOTAO
    {
        //public CHUONGTRINHDAOTAO()
        //{
        //    CTDTMONHOCs = new HashSet<CTDTMONHOC>();
        //}

        public string MaChuongTrinhDaoTao { get; set; }
        public string TenChuongTrinhDaoTao { get; set; }
        public int? TongSoTinChi { get; set; }
        public string HeDaoTao { get; set; }
        public string MoTa { get; set; }
        public string MaNganhDaoTao { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public string MaSinhVien { get; set; }
        public string TenSinhVien { get; set; }
        public string MaLop { get; set; }
        public DateTime? SinhNhat { get; set; }

        //public virtual NGANHDAOTAO MaNganhDaoTaoNavigation { get; set; }
        //public virtual ICollection<CTDTMONHOC> CTDTMONHOCs { get; set; }
    }
}
