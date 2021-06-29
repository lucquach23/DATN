using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Ctdtmonhoc
    {
        public int IdCtdtmonHoc { get; set; }
        public string MaChuongTrinhDaoTao { get; set; }
        public string MaMonHoc { get; set; }
        public string HocKi { get; set; }
        public bool? LoaiMonHoc { get; set; }
        public string LoaiTuChon { get; set; }
        public string NhomNganh { get; set; }
        public int? SoTctcmax { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual Chuongtrinhdaotao MaChuongTrinhDaoTaoNavigation { get; set; }
        public virtual Monhoc MaMonHocNavigation { get; set; }
    }
}
