using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Giangvien
    {
        public Giangvien()
        {
            Lops = new HashSet<Lop>();
        }

        public string MaGiangVien { get; set; }
        public string TenGiangVien { get; set; }
        public DateTime? SinhNhat { get; set; }
        public string QueQuan { get; set; }
        public bool? GioiTinh { get; set; }
        public string Email { get; set; }
        public string SoDienThoai { get; set; }
        public string MaKhoa { get; set; }
        public string MaNganhDaoTao { get; set; }
        public string NgachVienChuc { get; set; }
        public string ChucVu { get; set; }
        public string Password { get; set; }
        public string HocVi { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual ICollection<Lop> Lops { get; set; }
    }
}
