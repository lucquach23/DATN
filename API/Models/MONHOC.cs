using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Monhoc
    {
        public Monhoc()
        {
            Ctdtmonhocs = new HashSet<Ctdtmonhoc>();
        }

        public string MaMonHoc { get; set; }
        public string TenMonHoc { get; set; }
        public int? SoTinChi { get; set; }
        public int? SoTinChiLiThuyet { get; set; }
        public int? SoTinChiThucHanh { get; set; }
        public string KhaiQuatChung { get; set; }
        public string NhomTuChon { get; set; }
        public string Link { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual ICollection<Ctdtmonhoc> Ctdtmonhocs { get; set; }
    }
}
