using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Sinhvien
    {
        public Sinhvien()
        {
            Dangkis = new HashSet<Dangki>();
        }

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

        public virtual Lop MaLopNavigation { get; set; }
        public virtual ICollection<Dangki> Dangkis { get; set; }
    }
}
