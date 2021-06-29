using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public partial class KHUNGCHUONGTRINH
    {
        public string MaChuongTrinhDaoTao { get; set; }
        public string MaMonHoc { get; set; }
        public string TenMonHoc { get; set; }
        public int? SoTinChi { get; set; }
        public int? HocKi { get; set; }
        public bool? LoaiMonHoc { get; set; }
        public int? SoTCTCMax { get; set; }
    }
}
