using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Dangki
    {
        public int MaDangKi { get; set; }
        public string MaSinhVien { get; set; }
        public string MaLopMonHoc { get; set; }
        public double? DiemTongKet { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual Lopmonhoc MaLopMonHocNavigation { get; set; }
        public virtual Sinhvien MaSinhVienNavigation { get; set; }
    }
}
